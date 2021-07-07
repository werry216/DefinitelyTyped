import * as React from 'react';

declare namespace MediaHeading {
    interface MediaHeadingProps extends React.HTMLProps<MediaHeading> {
        componentClass?: React.ReactType | undefined;
    }
}
declare class MediaHeading extends React.Component<MediaHeading.MediaHeadingProps> { }
export = MediaHeading;
