import React, { Component } from 'react'
import BreadCrumb from '../elements/BreadCrumb'

export default class example extends Component {

    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ]

        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-auto">
                        <BreadCrumb data={breadcrumb} />
                    </div>
                </div>
            </div>
        )
    }
}
