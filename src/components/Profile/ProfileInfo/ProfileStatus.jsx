import * as React from "react";
import {TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export class ProfileStatus extends React.Component{

    state={
        editMode: false,
        status: this.props.profileStatus || 'указать статус'
    }

    enableEditMode =  () => {
        this.setState({editMode:true})
    }

    disableEditMode =  () => {
        this.setState({editMode:false})
        this.props.setStatus(this.state.status);
    }

    onChangeStatus = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {

        return (<div>

            {!this.state.editMode && <div>
                <Typography onClick={this.enableEditMode} >{this.state.status}</Typography>
            </div>}

            {this.state.editMode && <div>
                <TextField onChange={(e)=>this.onChangeStatus(e)}
                           onBlur={this.disableEditMode} autoFocus={true} value={this.state.status}/>
            </div>}
        </div>)
    }
}
