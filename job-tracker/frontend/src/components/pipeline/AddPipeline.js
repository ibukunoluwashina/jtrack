// src/components/pipeline/AddPipeline.js
import React, { useContext, useState } from 'react';
import { PipelineContext } from '../../context/PipelineContext'; // Correct path for AddPipeline.js
import { useHistory } from 'react-router-dom';

const AddPipeline = () => {
    const { addPipeline } = useContext(PipelineContext);
    const [name, setName] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        addPipeline({ name });
        history.push('/pipelines'); // This route will need to be set up in your router
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Pipeline</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Pipeline Name"
                required
            />
            <button type="submit">Add Pipeline</button>
        </form>
    );
};

export default AddPipeline;