import Menu from "./Menu";

export default function Appetizers(props) {
  console.log(props.item.spicy_level);

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex align-items-stretch my-1">
      <div className="card w-100 mb-4" id="card">
        <h5 className="card-header">
          <div className="col">{props.item.title}</div>{" "}
          <div className="col price">${props.item.price}</div>
        </h5>

        <div className="card-body">
          <div className="card-text">{props.item.description}</div>
        </div>
      </div>
    </div>
  );
}
