import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../../styles/task.css';

const PostTaskComponent = () => {
  const [taskDescription, setTaskDescription] = useState('hsfgfbdfcsdfgbfdzfcs');
  const [selectedDate, setSelectedDate] = useState('flexible');
  const [needsSpecificTime, setNeedsSpecificTime] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { taskDescription, selectedDate, needsSpecificTime });
  };

  return (
    <div className="post-task-container">
      {/* Header */}
      <header className="header">
        <div>
          <h1 className="header-title">Airtasker</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-container">
        <div className="grid-layout">
          {/* Left Sidebar */}
          <div>
            <div className="sidebar">
              <h2 className="sidebar-title">Post a task</h2>
              
              <nav>
                <div className="nav-item active">
                  <span>Title & Date</span>
                </div>
                <div className="nav-item inactive">
                  <span>Location</span>
                </div>
                <div className="nav-item inactive">
                  <span>Details</span>
                </div>
                <div className="nav-item inactive">
                  <span>Budget</span>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Form Area */}
          <div>
            <div className="main-form">
              <h1 className="main-title">Let's start with the basics</h1>
              
              <div>
                {/* Task Description */}
                <div className="form-group">
                  <label htmlFor="task-description" className="form-label">
                    In a few words, what do you need done?
                  </label>
                  <textarea
                    id="task-description"
                    className="textarea"
                    placeholder="Describe your task..."
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                </div>

                {/* Date Selection */}
                <div className="form-group">
                  <label className="form-label">
                    When do you need this done?
                  </label>
                  
                  <div className="button-group">
                    <button
                      type="button"
                      onClick={() => setSelectedDate('on-date')}
                      className={`date-button ${
                        selectedDate === 'on-date' ? 'active' : ''
                      }`}
                    >
                      On date
                      <ChevronDown className="chevron-icon" />
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setSelectedDate('before-date')}
                      className={`date-button ${
                        selectedDate === 'before-date' ? 'active' : ''
                      }`}
                    >
                      Before date
                      <ChevronDown className="chevron-icon" />
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setSelectedDate('flexible')}
                      className={`date-button ${
                        selectedDate === 'flexible' ? 'flexible' : ''
                      }`}
                    >
                      I'm flexible
                    </button>
                  </div>

                  {/* Specific Time Checkbox */}
                  <div className="checkbox-container">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={needsSpecificTime}
                        onChange={(e) => setNeedsSpecificTime(e.target.checked)}
                        className="checkbox"
                      />
                      <span className="checkbox-text">I need a certain time of day</span>
                    </label>
                  </div>
                </div>

                {/* Next Button */}
                <div className="next-button-container">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="next-button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTaskComponent;