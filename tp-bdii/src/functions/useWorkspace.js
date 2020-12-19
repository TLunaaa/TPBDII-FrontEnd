import { useState } from 'react';

export default function useWorkspace() {

    const getWorkspace = () => {
        const workspaceString = localStorage.getItem('workspace');
        return workspaceString;
    }

    const [workspace, setWorkspace] = useState(getWorkspace());

    const saveWorkspace = workspace => {
        localStorage.setItem('workspace', workspace);
        setWorkspace(workspace);
    }

    return {
        setWorkspace: saveWorkspace,
        workspace: workspace
    }
}