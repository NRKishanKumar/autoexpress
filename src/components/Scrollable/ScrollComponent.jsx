import React, { component } from "react";
import axios from "axios";

class ScrollComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            loading: false,
            page: 0,
            prevY: 0
        }
    }

    getPhotos(page) {
        this.setState({ loading: true });
        axios
            .get(
                `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`,
            )
            .then(res => {
                this.setState({ photos: [...this.state.photos, ...res.data]});
                this.setState({ loading: false });
            })
    }

    render() {
        return (
            <div className="container">

            </div>
        )
    }
}

export default ScrollComponent;