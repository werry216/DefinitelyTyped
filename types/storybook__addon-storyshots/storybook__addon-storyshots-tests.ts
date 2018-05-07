import initStoryshots, { multiSnapshotWithOptions, snapshotWithOptions, getSnapshotFileName, renderOnly, imageSnapshot } from "@storybook/addon-storyshots";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest';
import 'jest-specific-snapshot';

initStoryshots({
    integrityOptions: { cwd: '' },
    test: multiSnapshotWithOptions({}),
});

initStoryshots({
  test: ({ story, context }) => {
    const snapshotFileName = getSnapshotFileName(context);
    const storyElement = story.render() as JSX.Element;
    const shallowTree = shallow(storyElement);

    if (snapshotFileName) {
      expect(toJson(shallowTree)).toMatchSpecificSnapshot(snapshotFileName);
    }
  }
});

initStoryshots({
    configPath: "",
    test: renderOnly
});

initStoryshots({
    configPath: "",
    test: imageSnapshot({
        storybookUrl: "http://localhost:9002"
    })
});

initStoryshots({
    configPath: "",
    test: imageSnapshot({
        storybookUrl: "http://localhost:9002",
        getScreenshotOptions: ({ context, url }) => ({ path: "/foo" }),
        getGotoOptions: ({ context, url }) => ({ timeout: 10 }),
        chromeExecutablePath: "/usr/local/bin/chrome"
    })
});

initStoryshots({
    framework: 'react',
    configPath: '',
    test: snapshotWithOptions({
        createNodeMock: (element) => {
            if (element.type === 'div') {
              return { scrollWidth: 123 };
            }
            return null;
        }
    })
});
