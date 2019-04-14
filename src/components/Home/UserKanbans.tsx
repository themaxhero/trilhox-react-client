import React from "react";
import { uuid } from "../../types/generic";
import KanbanThumb from "./KanbanThumb";

function UserKanbans({user, kanbans, openKanban}: any){
    return (
        <div className="UserKanbans-container">
            { user.kanbans.map((id: uuid) =>
                <KanbanThumb 
                    kanbanId={id}
                    kanban={kanbans.get(id)}
                    openKanban={ openKanban }
                /> 
            )
            }
        </div>
        )
}

export default UserKanbans;