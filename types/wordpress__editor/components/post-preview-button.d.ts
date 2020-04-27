import { ComponentType } from 'react';

declare namespace PostPreviewButton {
    interface Props {
        children?: never;
        forcePreviewLink?: string;
        forceIsAutosaveable?: boolean;
    }
}
declare const PostPreviewButton: ComponentType<PostPreviewButton.Props>;

export default PostPreviewButton;
