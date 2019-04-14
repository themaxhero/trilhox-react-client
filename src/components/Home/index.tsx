import React from "react";
import UserKanbans from "./UserKanbans";
import { uuid } from "../../types/generic";
import { state } from "../../initialState";
import { Dispatch } from "redux";
import { connect } from "react-redux";

function Home({user, kanbans, openKanban}: any){
  return ( 
    <div className="Home-container">
      <div className="Home-kanbans">
        <UserKanbans user={user} kanbans={kanbans} openKanban={openKanban} />
      </div>
    </div>
  )
}

function mapStateToProps(state: state){
    return {
        kanbans: state.kanbans,
    }
}

function mapDispatchToProps(dispatch: Dispatch){
    return {
        openKanban: (id: uuid) => dispatch({ type: "OPEN_KANBAN",
                                             payload: {id}
                                           }),
        newKanban: () => dispatch({ type: "CREATE_KANBAN" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);