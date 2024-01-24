


import React, { useState } from 'react';

const Home = () => {
  const [developerName, setDeveloperName] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [hostedUrl, setHostedUrl] = useState('');
  // You can perform further actions with the form data here
  console.log('Developer Name:', developerName);
  console.log('Project Title:', projectTitle);
  console.log('Project Description:', projectDescription);
  console.log('Hosted URL:', hostedUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      developerName,
      projectTitle,
      projectDescription,
      hostedUrl
    }
    console.log(payload);

  };

  return (
    <>

      <form>
        <div className="form-group container">
          <h1>SUBMIT YOUR PROJECTS</h1>
          {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={developerName}
            onChange={(e) => setDeveloperName(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Developers name"
          />

        </div><br /><br />
        <div className="form-group container">
          <input
            type="email"
            className="form-control"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Project title"
          />
        </div><br /><br />
        <div className="form-group container">
          <input
            type="email"
            className="form-control"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Project Description"

          />
        </div><br /><br />
        <div className="form-group container">
          <input
            type="email"
            className="form-control"
            value={hostedUrl}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Hosted URL"
            onChange={(e) => setHostedUrl(e.target.value)}
          />
        </div><br /><br />

        <button type="submit" onClick={handleSubmit} className="btn btn-primary ms-5">
          Submit
        </button><br /><br />
      </form>
    </>
  );
};

export default Home;

