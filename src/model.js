import {
    TextBlock,
    TitleBlock,
    ColumnsBlock,
    ImageBlock,
    DefaultBlock,
} from './classes/blocks';
export const model = [
    new DefaultBlock(
        new TitleBlock('Hi from constuctor!', {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center',
            },
        }),
        {
            styles: {
                background: 'green',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center',
            },
        }
    ),
    new DefaultBlock(
        new TitleBlock('Hi from constuctor!', {
            tag: 'h4',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center',
            },
            column: true,
        }),
        {
            styles: {
                background: 'blue',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center',
            },
        }
    ),

    new TitleBlock('Hi from constuctor!', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',
        },
        column: true,
    }),

    new ImageBlock('./src/assets/image.png', {
        // styles: {
        //     padding: '2rem 0',
        //     display: 'flex',
        //     'justify-content': 'center',
        // },
        styles: {
            height: '200px',
            weight: 'auto',
        },
        alt: 'alt',
        column: true,
    }),
    new ColumnsBlock(
        ['klnwevefmcmroe', 'ejewiweicmwehfie', 'nevifijlkfjiuehfkeqwji', 'veiro'],
        {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                color: '#fff',
                padding: '2rem',
                'font-weight': 'bold',
            },
        }
    ),
    new TextBlock('leoeofmlwefmewflemfj', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
        },
    }),
];
