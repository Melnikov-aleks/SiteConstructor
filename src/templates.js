// import { row, col, css } from './utils';

// function title(block) {
//     const { tag = 'h1', styles } = block.options;
//     return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
// }
// function text(block) {
//     const { styles } = block.options;
//     return row(col(`<p>${block.value}</p>`), css(styles));
// }
// function columns(block) {
//     const { styles } = block.options;
//     const html = block.value.map(col).join('');
//     return row(html, css(styles));
// }
// function image(block) {
//     const { styles, alt, imageStyles } = block.options;
//     return row(
//         `<img src="${block.value}" alt="${alt}" style="${css(imageStyles)}">`,
//         css(styles)
//     );
// }

// export const templates = {
//     title,
//     text,
//     columns,
//     image,
// };
