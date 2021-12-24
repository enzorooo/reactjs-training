import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// import React Components here
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Enable live reloading
if (module.hot) {
    module.hot.accept();
  }

// timeAgo function

function formatDate(someDateTimeStamp) {
    var fulldays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var dt = new Date(someDateTimeStamp),
        date = dt.getDate(),
        month = months[dt.getMonth()],
        diffDays = new Date().getDate() - date,
        diffMonths = new Date().getMonth() - dt.getMonth(),
        diffYears = new Date().getFullYear() - dt.getFullYear(),
        timeString = someDateTimeStamp.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    if(diffYears === 0 && diffDays === 0 && diffMonths === 0){
      return `Today at ${timeString}`;
    }else if(diffYears === 0 && diffDays === 1) {
      return `Yesterday at ${timeString}`;
    }else if(diffYears === 0 && diffDays === -1) {
      return `Tomorrow at ${timeString}`;
    }else if(diffYears === 0 && (diffDays < -1 && diffDays > -7)) {
      return fulldays[dt.getDay()];
    }else if(diffYears >= 1){
      return month + " " + date + ", " + new Date(someDateTimeStamp).getFullYear();
      }else {
        return `${month} ${date} at ${timeString}`;
      }
}

const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author={faker.name.findName()} 
                    text={faker.lorem.sentence()} 
                    timeAgo={formatDate(faker.date.recent())}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author={faker.name.findName()} 
                    text={faker.lorem.sentence()} 
                    timeAgo={formatDate(faker.date.recent())}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author={faker.name.findName()} 
                    text={faker.lorem.sentence()} 
                    timeAgo={formatDate(faker.date.recent())}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));