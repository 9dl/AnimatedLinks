# Animated Link

The `AnimatedLink` component is a custom link component designed for use in web applications built with Next.js. It enhances the user experience by providing a subtle animated underline effect upon hovering over the link. This effect is customizable based on the desired origin of the animation—left, right, or bottom.

## Usage

1. Import the `AnimatedLink` component into your Next.js project:

   ```javascript
    const AnimatedLink = ({ href, text, origin }) => {
        const transformOriginClass = origin === 'left' ? 'origin-left' : origin === 'right' ? 'origin-right' : 'origin-bottom';
        return (
            <a href={href} className="group relative inline-block text-blue-500 hover:text-blue-700 transition-all duration-300">
                {text}
                <span className={`absolute inset-x-0 -bottom-[0.7px] h-0.5 bg-blue-500 transform ${transformOriginClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
            </a>
        );
    };
   ```

2. Integrate the `AnimatedLink` component into your application, providing the necessary props:

   ```javascript
   const YourComponent = () => {
       return (
           <AnimatedLink href="#" text="Your Link Text" origin="left" />
       );
   };
   ```

   - `href`: The URL to which the link points.
   - `text`: The text to be displayed within the link.
   - `origin`: The origin of the animated underline effect—'left', 'right', or 'bottom'.

   Example usage in a container component:

   ```javascript
   const Home = () => {
       return (
           <div className={`flex justify-center items-center text-center h-screen gap-9`}>
               <AnimatedLink href="#" text="Animated Link (Left)" origin="left" />
               <AnimatedLink href="#" text="Animated Link (Right)" origin="right" />
               <AnimatedLink href="#" text="Animated Link (Bottom)" origin="bottom" />
           </div>
       );
   };

   export default Home;
   ```

## Customization

The `AnimatedLink` component allows for easy customization of the animated underline effect. The `origin` prop determines the direction from which the underline originates, influencing the visual impact of the animation.

- `origin="left"`: The underline animates from the left.
- `origin="right"`: The underline animates from the right.
- `origin="bottom"`: The underline animates from the bottom.

## Styling

Feel free to adapt the styling of the link and the animated underline according to your application's design. The component uses Tailwind CSS classes for styling, making it simple to integrate seamlessly with your existing styles.

```javascript
<a href={href} className="group relative inline-block text-blue-500 hover:text-blue-700 transition-all duration-300">
    {text}
    <span className={`absolute inset-x-0 -bottom-[0.7px] h-0.5 bg-blue-500 transform ${transformOriginClass} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
</a>
```

Feel free to adjust the color, hover effect, or any other styling properties to match your project's visual identity.

## Dependencies

The `AnimatedLink` component is designed to work seamlessly with Next.js projects and is reliant on the Next.js `Link` component for navigation. Ensure that you have Next.js properly set up in your project before using this component.

## License

This component is provided under the [MIT License](LICENSE). Feel free to use, modify, and distribute it in your projects. Contributions and feedback are welcome!
