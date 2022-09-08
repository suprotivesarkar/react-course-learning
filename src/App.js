import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Counter from './components/Counter';
import Message from './components/Message';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import styles from './components/myStyles.module.css'
import './components/myStyles.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragment from './components/Fragment';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <RefsDemo/>
        {/*<ParentComp/>
        <Fragment/>
        <LifecycleA/>
        <Form/>
        <div className="failure">Failure</div>
        <div className={styles.success}>Success</div>
        <Stylesheet primary={true}/>
        <NameList/>
        <UserGreeting/>
        <ParentComponent/>
         <ClassClick/>
        <FunctionClick/>
        <EventBind/>
        <Greet firstName="Suprotive" lastName="Sarkar"/>
        <Welcome greet="Nice to Meet You"/>
        <Message/>
        <Counter value={2}/> */}
      </div>
    );
  }
  
}

export default App;
