import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import DashboardLayout from '../layouts/DashboardLayout';
import { AuthContext } from '../context/AuthProvider';
import { getAuth } from 'firebase/auth';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const { user } = useContext(AuthContext);
    const auth = getAuth();

    useEffect(() => {
        const fetchProjects = async () => {
            if (!user) return; // Don't fetch if user is not logged in

            try {
                const idToken = await user.getIdToken();
                const res = await axios.get('/api/projects', {
                    headers: {
                        Authorization: `Bearer ${idToken}`
                    }
                });
                setProjects(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProjects();
    }, [user]);

    const createNewProject = async () => {
        if (!user) return;

        try {
            const idToken = await user.getIdToken();
            const res = await axios.post('/api/projects', {},
                {
                    headers: {
                        Authorization: `Bearer ${idToken}`
                    }
                }
            );
            setProjects([res.data, ...projects]);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteProject = async (id) => {
        if (!user) return;

        try {
            const idToken = await user.getIdToken();
            await axios.delete(`/api/projects/${id}`, {
                headers: {
                    Authorization: `Bearer ${idToken}`
                }
            });
            setProjects(projects.filter(p => p._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

  return (
    <DashboardLayout>
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold">Your Creatives</h1>
                    <button 
                        onClick={createNewProject}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                        + New Creative
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projects.map(project => (
                        <div key={project._id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group relative">
                            <div className="p-5">
                                <h3 className="text-xl font-semibold truncate">{project.name}</h3>
                                <p className="text-gray-400 text-sm mt-1">Updated: {new Date(project.updatedAt).toLocaleDateString()}</p>
                            </div>
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => deleteProject(project._id)} className="text-red-500 hover:text-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length === 0 && (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-semibold mb-4">No creatives yet!</h2>
                        <p className="text-gray-400 mb-6">Click the "+ New Creative" button to get started.</p>
                    </div>
                )}
            </div>
        </div>
    </DashboardLayout>
  );
};

export default Dashboard;
