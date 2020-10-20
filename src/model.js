import {
    TextBlock,
    TitleBlock,
    ImageBlock,
    DefaultBlock,
    ColumnBlock,
} from './classes/blocks';
export const model = [
    // new DefaultBlock(
    //     [
    //         new TitleBlock(['Hi from constuctor0!'], {
    //             tag: 'h2',
    //             styles: {
    //                 background: 'linear-gradient(to right, #ff0099, #493240)',
    //                 color: '#fff',
    //                 padding: '1.5rem',
    //                 'text-align': 'center',
    //             },
    //             columns: true,
    //         }),
    //         new TitleBlock(
    //             [
    //                 new DefaultBlock(
    //                     [
    //                         new TitleBlock(['Hi1'], {
    //                             tag: 'h2',
    //                             styles: {
    //                                 background:
    //                                     'linear-gradient(to right, #ff0099, #493240)',
    //                                 color: '#fff',
    //                                 padding: '1.5rem',
    //                                 'text-align': 'center',
    //                             },
    //                             columns: true,
    //                         }),
    //                         new TitleBlock(['Hi2'], {
    //                             tag: 'h2',
    //                             styles: {
    //                                 background:
    //                                     'linear-gradient(to right, #ff0099, #493240)',
    //                                 color: '#fff',
    //                                 padding: '1.5rem',
    //                                 'text-align': 'center',
    //                             },
    //                             columns: true,
    //                         }),
    //                     ],
    //                     {
    //                         styles: {
    //                             background: 'blue',
    //                             color: '#fff',
    //                             padding: '1.5rem',
    //                             'text-align': 'center',
    //                         },
    //                     }
    //                 ),
    //                 'Hi3',
    //                 'Hi4',
    //             ],
    //             {
    //                 tag: 'h2',
    //                 styles: {
    //                     background: 'linear-gradient(to right, #ff0099, #493240)',
    //                     color: '#fff',
    //                     padding: '1.5rem',
    //                     'text-align': 'center',
    //                 },
    //                 columns: true,
    //             }
    //         ),
    //     ],
    //     {
    //         styles: {
    //             background: 'green',
    //             color: '#fff',
    //             padding: '1.5rem',
    //             'text-align': 'center',
    //         },
    //     }
    // ),
    // new DefaultBlock(
    //     [
    //         new TitleBlock(['Hi from constuctor!'], {
    //             tag: 'h4',
    //             styles: {
    //                 background: 'linear-gradient(to right, #ff0099, #493240)',
    //                 color: '#fff',
    //                 padding: '1.5rem',
    //                 'text-align': 'center',
    //             },
    //         }),
    //     ],
    //     {
    //         styles: {
    //             background: 'blue',
    //             color: '#fff',
    //             padding: '1.5rem',
    //             'text-align': 'center',
    //         },
    //     }
    // ),

    // new TitleBlock(['Hi from constuctor9!'], {
    //     tag: 'h2',
    //     styles: {
    //         background: 'linear-gradient(to right, #ff0099, #493240)',
    //         color: '#fff',
    //         padding: '1.5rem',
    //         'text-align': 'center',
    //     },
    //     columns: true,
    // }),
    // new TitleBlock(['Hi from constuctor10!'], {
    //     tag: 'h2',
    //     styles: {
    //         background: 'linear-gradient(to right, #ff0099, #493240)',
    //         color: '#fff',
    //         padding: '1.5rem',
    //         'text-align': 'center',
    //     },
    // }),

    // new ImageBlock(['./src/assets/image.png'], {
    //     // styles: {
    //     //     padding: '2rem 0',
    //     //     display: 'flex',
    //     //     'justify-content': 'center',
    //     // },
    //     styles: {
    //         height: '200px',
    //         weight: 'auto',
    //     },
    //     alt: 'alt',
    //     column: true,
    // }),
    // new TextBlock(['leoeofmlwefmewflemfj'], {
    //     styles: {
    //         background: 'linear-gradient(to left, #f2994a, #f2c94c)',
    //         padding: '1rem',
    //         'font-weight': 'bold',
    //     },
    // }),

    new DefaultBlock(
        [
            new TitleBlock(['Create your SITE'], {
                styles: {
                    color: 'blue',
                },
            }),
        ],
        {
            styles: {
                background: 'gray',
                padding: '1rem',
            },
        }
    ),
    new DefaultBlock(
        [
            new ColumnBlock(
                [
                    new TitleBlock(['nawi preimyshestva'], {
                        styles: {
                            color: 'green',
                            'text-align': 'center',
                        },
                    }),
                    new TextBlock(['description'], {
                        styles: {
                            color: 'green',
                            'text-align': 'center',
                        },
                    }),
                ],
                {
                    styles: {
                        background: 'yellow',
                    },
                }
            ),
            new ColumnBlock(
                [
                    new TitleBlock(['vashi preimyshestva'], {
                        styles: {
                            color: 'orange',
                            'text-align': 'center',
                        },
                    }),
                ],
                {
                    styles: {
                        background: 'pink',
                    },
                }
            ),
        ],
        {}
    ),
];
