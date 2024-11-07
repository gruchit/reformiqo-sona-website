import * as React from 'react'; 
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IoLocationOutline } from "react-icons/io5";
import './Careers.css';

// Sample Data for Autocomplete Suggestions
const jobOptions = [
  { label: 'Full-Time' },
  { label: 'Part-Time' },
  { label: 'Permanent' },
];

const categoryOptions = [
  { label: 'Production, Manufacturing & Engineering' },
  { label: 'Quality Control / Quality Assurance' },
];

function BuildCareers() {
  return (
    <>
      <div className="BuildCareers">
        <div className="BuildCareers_Detalis flex-column text-center">
          <h2 className="sans_light">Build Your Career</h2>
          <p className="sans_light">
            Sona Extrusion is a great place to kickstart your career. You will contribute to our
            business from day one and get access to build your skills for your future. You’ll also
            collaborate with global teams, take advantage of opportunities – all in a dynamic
            environment filled with industry experts.
          </p>
          <p className="sans_light">
            We take our responsibilities as an employer very seriously. We take good care of our new
            employees, but we also challenge them from the very beginning by giving them
            responsibilities very quickly.
          </p>
        </div>
        <div className="BuildCareersForm">
          <form action="">
            <div className="flex-column row-gap-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="CityInputWrapper">
                  <TextField
                    id="outlined-basic"
                    label="City, State or Pin code"
                    variant="outlined"
                    className="CityInput"
                  />
                  <IoLocationOutline className="location-icon" />
                </div>
                <button type="button" className="btn BuildBTN text-white">
                  Find Job
                </button>
              </div>
              <div className="d-flex justify-content-between gap-3 mt-3">
                {/* Job Type Autocomplete */}
                <Autocomplete
                  disablePortal
                  options={jobOptions}
                  sx={{ width: '100%' }}
                  renderInput={(params) => (
                    <TextField {...params} label="Job Type" variant="outlined" className="BuildJob" />
                  )}
                />

                {/* Category Autocomplete */}
                <Autocomplete
                  disablePortal
                  options={categoryOptions}
                  sx={{ width: '100%' }}
                  renderInput={(params) => (
                    <TextField {...params} label="Category" variant="outlined" className="BuildCategory" />
                  )}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BuildCareers;
