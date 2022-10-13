export default function Dessert (props) {
    return (
        <ul>
            <li>{props.item.title} - {props.item.price}</li>
        </ul>
    )
}