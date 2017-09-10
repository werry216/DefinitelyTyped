import * as React from "react";
import {
    Environment,
    Network,
    RecordSource,
    Store,
    ConnectionHandler,
} from 'relay-runtime';




////////////////////////////
//  RELAY MODERN TESTS
///////////////////////////
import {
    graphql,
    commitMutation,
    createFragmentContainer,
    createPaginationContainer,
    createRefetchContainer,
    requestSubscription,
    QueryRenderer,
    RelayPaginationProp,
    RelayRefetchProp
} from "react-relay";


// ~~~~~~~~~~~~~~~~~~~~~
// Modern Environment
// ~~~~~~~~~~~~~~~~~~~~~
let network: __Relay.Runtime.RelayNetwork;
const source = new RecordSource();
const store = new Store(source);
const modernEnvironment = new Environment({ network, store });


// ~~~~~~~~~~~~~~~~~~~~~
// Modern QueryRenderer
// ~~~~~~~~~~~~~~~~~~~~~
const MyQueryRenderer = (props: { name: string}) => (
  <QueryRenderer
    environment={ modernEnvironment }
    query={graphql`
      query ExampleQuery($pageID: ID!) {
        page(id: $pageID) {
          name
        }
      }
    `}
    variables={{
      pageID: '110798995619330',
    }}
    render={({error, props}) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <div>{props.name} is great!</div>;
      }
      return <div>Loading</div>;
    }}
  />
);

// ~~~~~~~~~~~~~~~~~~~~~
// Modern FragmentContainer
// ~~~~~~~~~~~~~~~~~~~~~
const MyFragmentContainer = createFragmentContainer(
    class TodoListView extends React.Component {
        render() {
            return <div/>;
        }
    },
    {
        item: graphql`
            fragment TodoItem_item on Todo {
            text
            isComplete
            }
        `,
    }
);


// ~~~~~~~~~~~~~~~~~~~~~
// Modern RefetchContainer
// ~~~~~~~~~~~~~~~~~~~~~
interface IStory { id: string }
interface IFeedStoriesProps {
    relay: RelayRefetchProp;
    feed: {
        stories: { edges: { node: IStory }[] }
    }
}
class Story extends React.Component<{ story: IStory }, {}> {}
class FeedStories extends React.Component<IFeedStoriesProps, {}> {
    render() {
      return (
        <div>
          {this.props.feed.stories.edges.map(
            edge => <Story story={edge.node} key={edge.node.id} />
          )}
          <button
            onClick={() => this._loadMore}
            title="Load More"
          />
        </div>
      );
    }

    _loadMore() {
      // Increments the number of stories being rendered by 10.
      const refetchVariables = (fragmentVariables: {count: number }) => ({
        count: fragmentVariables.count + 10,
      });
      this.props.relay.refetch(refetchVariables, null);
    }
  }

const FeedRefetchContainer = createRefetchContainer(
    FeedStories,
    {
      feed: graphql.experimental`
        fragment FeedStories_feed on Feed
        @argumentDefinitions(
          count: {type: "Int", defaultValue: 10}
        ) {
          stories(first: $count) {
            edges {
              node {
                id
                ...Story_story
              }
            }
          }
        }
      `
    },
    graphql.experimental`
      query FeedStoriesRefetchQuery($count: Int) {
        feed {
          ...FeedStories_feed @arguments(count: $count)
        }
      }
    `,
  );



// ~~~~~~~~~~~~~~~~~~~~~
// Modern PaginationContainer
// ~~~~~~~~~~~~~~~~~~~~~
interface IFeedProps {
    user: { feed: { edges: { node: IStory}[]}}
    relay: RelayPaginationProp;
}
class Feed extends React.Component<IFeedProps, {}> {
    render() {
        return (<div>
            {this.props.user.feed.edges.map(
            edge => <Story story={edge.node} key={edge.node.id} />
            )}
            <button
                onClick={() => this._loadMore()}
                title="Load More"
            />
        </div>);
    }

    _loadMore() {
        if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
            return;
        }

        this.props.relay.loadMore(
            10, // Fetch the next 10 feed items
            e => {
                console.log(e);
            },
        );
    }
}

const FeedPaginationContainer = createPaginationContainer(
    Feed,
    {
        user: graphql`
        fragment Feed_user on User {
            feed(
            first: $count
            after: $cursor
            orderby: $orderBy # other variables
            ) @connection(key: "Feed_feed") {
            edges {
                node {
                id
                ...Story_story
                }
            }
            }
        }
        `,
    },
    {
        direction: 'forward',
        getConnectionFromProps(props: { user: {feed: any}}) {
            return props.user && props.user.feed;
        },
        getFragmentVariables(prevVars, totalCount) {
            return {
                ...prevVars,
                count: totalCount,
            };
        },
        getVariables(props, {count, cursor}, fragmentVariables) {
            return {
                count,
                cursor,
                // in most cases, for variables other than connection filters like
                // `first`, `after`, etc. you may want to use the previous values.
                orderBy: fragmentVariables.orderBy,
            };
        },
        query: graphql`
        query FeedPaginationQuery(
            $count: Int!
            $cursor: String
            $orderby: String!
        ) {
            user {
            # You could reference the fragment defined previously.
            ...Feed_user
            }
        }
        `
    }
);


// ~~~~~~~~~~~~~~~~~~~~~
// Modern Mutations
// ~~~~~~~~~~~~~~~~~~~~~
const mutation = graphql`
mutation MarkReadNotificationMutation(
    $input: MarkReadNotificationData!
) {
    markReadNotification(data: $input) {
        notification {
            seenState
        }
    }
}
`;

const optimisticResponse = {
    markReadNotification: {
        notification: {
            seenState: 'SEEN',
        },
    },
};

const configs = [{
    type: 'NODE_DELETE' as 'NODE_DELETE',
    deletedIDFieldName: 'destroyedShipId',
}, {
    type: 'RANGE_ADD' as 'RANGE_ADD',
    parentID: 'shipId',
    connectionInfo: [{
        key: 'AddShip_ships',
        rangeBehavior: 'append',
    }],
    edgeName: 'newShipEdge',
}, {
    type: 'RANGE_DELETE' as 'RANGE_DELETE',
    parentID: 'todoId',
    connectionKeys: [{
        key: 'RemoveTags_tags',
        rangeBehavior: 'append',
    }],
    pathToConnection: ['todo', 'tags'],
    deletedIDFieldName: 'removedTagId'
}];

function markNotificationAsRead(source: string, storyID: string) {
    const variables = {
        input: {
            source,
            storyID,
        },
    };

    commitMutation(
        modernEnvironment,
        {
            configs,
            mutation,
            optimisticResponse,
            variables,
            onCompleted: (response, errors) => {
                console.log('Response received from server.')
            },
            onError: err => console.error(err),
        },
    );
}


// ~~~~~~~~~~~~~~~~~~~~~
// Modern Subscriptions
// ~~~~~~~~~~~~~~~~~~~~~
const subscription = graphql`
    subscription MarkReadNotificationSubscription(
        $storyID: ID!
    ) {
    markReadNotification(storyID: $storyID) {
        notification {
        seenState
        }
    }
    }
`;
const variables = {
    storyID: '123',
};
requestSubscription(
    modernEnvironment, // see Environment docs
    {
        subscription,
        variables,
        // optional but recommended:
        onCompleted: () => {},
        onError: error => console.error(error),
        // example of a custom updater
        updater: store => {
            // Get the notification
            const rootField = store.getRootField('markReadNotification');
            const notification = !!rootField && rootField.getLinkedRecord('notification');
            // Add it to a connection
            const viewer = store.getRoot().getLinkedRecord('viewer');
            const notifications =
                ConnectionHandler.getConnection(viewer, 'notifications');
            const edge = ConnectionHandler.createEdge(
                store,
                notifications,
                notification,
                '<TypeOfNotificationsEdge>',
            );
            ConnectionHandler.insertEdgeAfter(notifications, edge);
        },
    }
);




////////////////////////////
//  RELAY-CLASSIC TESTS
///////////////////////////

import * as Relay from "react-relay/classic";

interface Props {
    text: string
    userId: string
}

interface Response {
}

export default class AddTweetMutation extends Relay.Mutation<Props, Response> {

    getMutation () {
        return Relay.QL`mutation{addTweet}`
    }

    getFatQuery () {
        return Relay.QL`
            fragment on AddTweetPayload {
                tweetEdge
                user
            }
        `
    }

    getConfigs () {
        return [{
            type: "RANGE_ADD",
            parentName: "user",
            parentID: this.props.userId,
            connectionName: "tweets",
            edgeName: "tweetEdge",
            rangeBehaviors: {
                "": "append",
            },
        }]
    }

    getVariables () {
        return this.props
    }
}

interface ArtworkProps {
    artwork: {
        title: string
    },
    relay: Relay.RelayProp,
}

class Artwork extends React.Component<ArtworkProps> {
    render() {
        return (
            <a href={`/artworks/${this.props.relay.variables.artworkID}`}>
                {this.props.artwork.title}
            </a>
        )
    }
}

const ArtworkContainer = Relay.createContainer(Artwork, {
    fragments: {
        artwork: () => Relay.QL`
            fragment on Artwork {
                title
            }
        `
    }
})

class StubbedArtwork extends React.Component {
    render() {
        const props = {
            artwork: { title: "CHAMPAGNE FORMICA FLAG" },
            relay: {
                route: {
                    name: "champagne"
                },
                variables: {
                    artworkID: "champagne-formica-flag",
                },
                setVariables: () => {},
                forceFetch: () => {},
                hasOptimisticUpdate: () => false,
                getPendingTransactions: (): Relay.RelayMutationTransaction[] => undefined,
                commitUpdate: () => {},
            }
        }
        return <ArtworkContainer {...props} />
    }
}
