export default function TabButton({children, onSelect, isSelected}) {
    //Moved function to App.jsx
    // function handleClick() {
    //     console.log('Hello World!');
    // };

    console.log('TAB BUTTON EXECUTING');

    return (
    <li>
        <button className={ isSelected ? 'active' : undefined } onClick={onSelect}>{children}</button>
    </li>
    );   
}