import Aluno from '../models/Aluno';

class HomeController {
    index (req,res){
        res.json('Index');
    }
}

export default new HomeController();
