import React from "react";
import { connect } from "react-redux";
import Kanban from "./Kanban";
import Home from "./Home";
import { state } from "../initialState";


function PageRouter({page}: any){
    switch(page.type){
        case "LOGIN": 
        return <div/>
        
        case "HOME": 
        return <Home/>;
        
        case "KANBAN": 
        return <Kanban kanbanId={page.params.kanbanId}/>;
        
        default: 
        return <div/>
    }
}

function mapToStateProps(state: state){
    return{ page: state.page };
}

export default connect(mapToStateProps)(PageRouter)