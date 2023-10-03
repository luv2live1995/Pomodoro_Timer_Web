1. Cách đặt các element nằm ngang 
CSS Inline - Inline block
CSS Flexbox 
CSS Grid 
2. Giải thích đơn giản về thuộc tính margin, border, padding

Margin is the space outside an element.
Border is the line around an element.
Padding is the space inside an element, between its content and its border.

3. Pseudo class selector 
li:last-child

4. Flexbox là gì ? 
Flexbox, short for "Flexible Box Layout," is a CSS layout model that provides an efficient and predictable way to distribute space and align elements within a container, even when the container's size is unknown or dynamic. It simplifies complex layout challenges, making it easier to create responsive and flexible designs.

5. Block and inline elements 
Block  : create a new block formatting context in the document flow, and they typically start on a new line, taking up the full available width of their parent container.
    div, p, h1, h2, h3, ..., ul, ol, li, form, table, tr, td, section, article, header, footer, nav, aside, blockquote
Inline : do not start on a new line and only take up as much width as necessary to display their content
    span, a, strong, em, abbr, code, br, img, input, button

6. Cách align code CSS đẹp 
Shift Alt F

7. Position
position : absolute 
In CSS, the position: absolute; property is used to position an element relative to its nearest positioned ancestor (or the containing block) rather than within the normal document flow. When you set an element's position to "absolute," it is taken out of the flow of the document, and its positioning is determined by its closest positioned ancestor.

8. What is webpack ? 
Webpack is a tool that helps web developers manage and bundle their website's files, like JavaScript, CSS, and images. Imagine it as a packing machine for your web files.

Here's how it works:

You have many small files for your website, like different pieces of JavaScript code and CSS styles.

Webpack takes all these small files and combines them into one or a few larger files. This is like putting all your belongings into one suitcase for a trip.

It can also do some tricks, like making your files smaller or removing things you don't need, so your website loads faster.

When someone visits your website, they only download the bundled files, which is more efficient and makes your site faster.

So, Webpack helps developers organize, optimize, and package their web code, making websites faster and more efficient for users.

9. How to make p inside footer expands full width of footer ? 

footer p {
    width: 100%;
}