interface TestState {
    crop?: ReactCrop.Crop;
}

// Basic use case
class SimpleTest extends React.Component<{}, TestState> {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    onChange = (crop: ReactCrop.Crop) => {
        this.setState({ crop });
    }

    render() {
        return React.createElement(
            ReactCrop,
            {
                src: 'imageSrc',
                onChange: this.onChange,
                crop: this.state.crop,
            },
        );
    }
}

// Set an aspect ratio to crop
class AspectRatioTest extends React.Component<{}, TestState> {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    onChange = (crop: ReactCrop.Crop) => {
        this.setState({ crop });
    }

    onImageLoaded = (image: HTMLImageElement) => {
        this.setState({
            crop: ReactCrop.makeAspectCrop(
                {
                    x: 0,
                    y: 0,
                    aspect: 16 / 9,
                    width: 50,
                },
                image.width / image.height,
            ),
        });
    }

    render() {
        return React.createElement(
            ReactCrop,
            {
                src: 'imageSrc',
                onChange: this.onChange,
                onImageLoaded: this.onImageLoaded,
                crop: this.state.crop,
            },
        );
    }
}

// All available props
class CompleteTest extends React.Component<{}, TestState> {
    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    onChange = (crop: ReactCrop.Crop) => {
        this.setState({ crop });
    }

    onImageLoaded = (image: HTMLImageElement) => {
        this.setState({
            crop: ReactCrop.makeAspectCrop(
                {
                    x: 0,
                    y: 0,
                    aspect: 16 / 9,
                    width: 20,
                },
                image.width / image.height,
            ),
        });
    }

    render() {
        return React.createElement(
            ReactCrop,
            {
                src: 'imageSrc',
                onChange: this.onChange,
                onImageLoaded: this.onImageLoaded,
                crop: this.state.crop,
                minWidth: 30,
                minHeight: 30,
                maxWidth: 90,
                maxHeight: 90,
                keepSelection: true,
                disabled: false,
                style: { border: '1px solid black', position: 'relative' },
                onComplete: () => console.log('Crop complete'),
                onDragStart: () => console.log('Drag start'),
                onDragEnd: () => console.log('Drag end'),
                crossorigin: 'anonymous',
            },
        );
    }
}
