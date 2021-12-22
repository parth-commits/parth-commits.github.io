import './App.css'
import Navbar from './components/Navbar/Navbar';
import LandingView from './components/LandingView/LandingView';
import SoftwareView from './components/SoftwareView/SoftwareView';
import TimelineView from './components/TimelineView/TimelineView';
import ProjectsView from './components/ProjectsView/ProjectsView';
import EducationView from './components/EducationView/EducationView';
import AwardView from './components/AwardView/AwardView';
import ContactView from './components/ContactView/ContactView';
import FloatingBubblesView from './components/FloatingBubblesView/FloatingBubblesView';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FloatingBubblesView></FloatingBubblesView>
      <LandingView></LandingView>
      <SoftwareView></SoftwareView>
      <TimelineView></TimelineView>
      <ProjectsView></ProjectsView>
      <EducationView></EducationView>
      <AwardView></AwardView>
      <ContactView></ContactView>
    </div>
  );
}

export default App;
