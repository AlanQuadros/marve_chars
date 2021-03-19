import { Switch, Route } from 'react-router-dom'
import Character from "../pages/Character";
import CharacterList from "../pages/CharacterList";

function Routes(){
    return (
        <Switch>
            <Route path="/character" component={Character}/>
            <Route path="/" component={CharacterList} exact/>
        </Switch>
    );
}

export default Routes;
