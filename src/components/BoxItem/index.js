import logo from '../../assets/Images/css-icon 1.png'
import './BoxItem.css'
function BoxItem({img, title}) {
    return (
      <div className="box-item">
        <h5 className="title-box">{title}</h5>
        <div className="box-content">
          <img src={img} />
          <p className="text-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque
          </p>
        </div>
        <p className="text-bottom">
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </p>
      </div>
    );
}

export default BoxItem;