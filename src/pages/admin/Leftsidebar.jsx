import React from 'react'
import { Link } from 'react-router-dom'

function Leftsidebar() {
    return (
        <div>
            <div class="row">
                <div class="">
                    <div class="list-group" id="list-tab" role="tablist">
                        <Link class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home" style={{ background: "#5281c5bd" }} to={"/admin/addproduct"}>Addproduct</Link>
                        <Link class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile" to={"/admin/product"}>Product View</Link>
                        <Link class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile" to={"/admin/addcategory"}>Add category</Link>
                        {/* <Link class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages" to={"/admin/category"}>category</Link> */}
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Editcategory</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftsidebar