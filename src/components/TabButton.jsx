export default function TabButton({children, isSelected,  ...props}) {
    //Moved function to App.jsx
    // function handleClick() {
    //     console.log('Hello World!');
    // };

    console.log('TAB BUTTON EXECUTING');

    return (
    <li>
        <button className={ isSelected ? 'active' : undefined } {...props}>{children}</button>
    </li>
    );   
}