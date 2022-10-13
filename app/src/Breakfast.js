export default function Breakfast (props) {
    return (
        <ul>
            <li>{props.item.title} - {props.item.price}</li>
        </ul>
    )
}