export default function Lunch (props) {
    console.log(props)
return (
    <ul>
<li>{props.item.title} - {props.item.price}</li>
</ul>
)
}