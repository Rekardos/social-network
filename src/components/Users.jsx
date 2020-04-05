import * as React from "react";
import Pagination from "@material-ui/lab/Pagination";


let Users = (props) => {


    let pageCount = Math.ceil(props.totalUsers / props.pageSize);

    let users = props.users.map(e =>
        <div key={e.id}>
            {e.followed ?
                <input onClick={() => props.unfollow(e.id)} type={"submit"} value={'отписаться'}/> :
                <input onClick={() => props.follow(e.id)} type={"submit"} value={'подписаться'}/>}
            <span>{e.id}</span>
            <span>{e.name}</span>
            <span>{e.status}</span>
        </div>);


    return <div>

        {users}

        <Pagination onChange={(obj, page) => {props.pageNumber(page)}} count={pageCount}/>

    </div>


};

export default Users;
