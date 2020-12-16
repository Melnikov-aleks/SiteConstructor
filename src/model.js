import {
    TextBlock,
    TitleBlock,
    ImageBlock,
    DefaultBlock,
    ColumnBlock,
} from './classes/blocks';
export const model = [
    new DefaultBlock(
        [
            new ColumnBlock(
                [
                    new TitleBlock(['Site constructor'], {
                        classes: 'text-center',
                    }),
                    new TextBlock(
                        [
                            "Сайт создан на мини-курсе Владилена Минина 'Конструктор сайтов на JS'",
                        ],
                        {
                            classes: 'text-center',
                        }
                    ),
                ],
                {
                    classes: 'col-sm-6 pt-3 pb-3 text-light rounded',
                    styles: 'background-color:rgba(0,0,0,0.8)',
                }
            ),
        ],
        {
            classes: 'justify-content-center align-items-center',
            styles:
                "min-height:400px; background:center/cover no-repeat url('assets/header-background.jpg');",
        }
    ),
    new DefaultBlock(
        [
            new ColumnBlock(
                [
                    new TextBlock(
                        [
                            'Для добавления элемента выберете его тип, введите значение, и если необходимо, присвойте классы и стили.',
                        ],
                        {}
                    ),
                    new TextBlock(
                        [
                            'Для стилизации используется сетка Bootstrap. При необходимости можно обернуть добавляемый элемент в блок с классом row и col.',
                        ],
                        {}
                    ),
                    new TextBlock(
                        [
                            "При клике по элементу становится доступен выбор позиции вставки нового элемента относительно выбранного. Также под меню создания появляется 'Breadcrumbs', показывающий выбранный элемент, его предка и потомка(ов) при наличии.",
                        ],
                        {}
                    ),
                ],
                {
                    classes:
                        'col-sm-5 d-flex flex-column justify-content-center align-items-center',
                }
            ),
            new ColumnBlock(
                [
                    new ImageBlock(['assets/site-construction.png'], {
                        classes: 'img-fluid',
                    }),
                ],
                {
                    classes: 'col-sm-7',
                }
            ),
        ],
        { classes: 'pt-3 pb-3', styles: 'background: #9AA0AC' }
    ),
    new DefaultBlock(
        [
            new ColumnBlock(
                [
                    new ImageBlock(['assets/site-redactor.png'], {
                        classes: 'img-fluid',
                    }),
                ],
                {
                    classes: 'col-sm-7',
                }
            ),
            new ColumnBlock(
                [
                    new TextBlock(
                        [
                            'Чтобы отредактировать элемент, кликните по нему и в появившейся слева форме установите необходимое содержание, классы и стили.',
                        ],
                        {}
                    ),
                ],
                {
                    classes:
                        'col-sm-5 d-flex flex-column justify-content-center align-items-center',
                }
            ),
        ],
        { classes: 'pt-3 pb-3', styles: 'background: #7A90B8' }
    ),
];
