export default function Dinner (props) {
    return (
        <ul>
            <li>{props.item.title} - {props.item.price}</li>
        </ul>
    )
}