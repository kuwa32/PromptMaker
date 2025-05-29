import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

class Page_v1 extends React.Component{
    link_url = "https://www.google.com/"

    constructor(props){
        super(props)
    }

    render(){
        return <div class="container mt-3">
            <h1 class="bg-primary text-white display-4">ミライエ・ユメミルクリニック　処方箋</h1>
            <form>
                <div class="form-group">
                <legend class="alert alert-primary">お名前（ニックネームでOK！）</legend>
                <lavel for="student_name"></lavel>
                <input type="name" class="form-control" id="student_name"></input>
                </div><br /><br />
                
                <fieldset>
                <legend class="alert alert-primary">学校</legend>
                <label>
                    <input type="radio" name="school" value="middle" />
                    中学校
                </label><br />
                <label>
                    <input type="radio" name="school" value="high" />
                    高校
                </label><br />
                <label>
                    <input type="radio" name="school" value="high_tech" />
                    高専
                </label><br />
                <label>
                    <input type="radio" name="school" value="training" />
                    専門学校
                </label><br />
                <label>
                    <input type="radio" name="school" value="college" />
                    大学
                </label>
                </fieldset>

                <fieldset>
                <legend class="alert alert-primary">学年</legend>
                <label>
                    <input type="radio" name="grade" value="g1" />
                    1年
                </label><br />
                <label>
                    <input type="radio" name="grade" value="g2" />
                    2年
                </label><br />
                <label>
                    <input type="radio" name="grade" value="g3" />
                    3年
                </label><br />
                <label>
                    <input type="radio" name="grade" value="g4" />
                    4年
                </label><br />
                <label>
                    <input type="radio" name="grade" value="g5" />
                    5年
                </label>
                </fieldset>

                <fieldset>
                <legend class="alert alert-primary">性別</legend>
                <label>
                    <input type="radio" name="gender" value="male" />
                    男性
                </label><br />
                <label>
                    <input type="radio" name="gender" value="female" />
                    女性
                </label>
                </fieldset>

                <fieldset>
                <legend class="alert alert-primary">相談したいこと</legend>
                <label>
                    <input type="radio" name="route" value="what_is_next_route" />
                    どうしよう？進路のことを相談したい
                </label><br />
                <label>
                    <input type="radio" name="route" value="write_choice_reason" />
                    志望動機に何を書けば良いか、相談したい
                </label><br />
                <label>
                    <input type="radio" name="route" value="write_my_appeal" />
                    強みや弱み、自己PRについて相談したい
                </label><br />
                <label>
                    <input type="radio" name="route" value="write_business_mail" />
                    ビジネスメールの書き方を相談したい
                </label><br />
                <label>
                <input type="radio" name="route" value="unknown" />
                    まだ決まっていないが、何となく不安
                </label>
                </fieldset>

                <br />
                <button type="submit">送信</button>
                <br />
                <h2 class="btn btn-primary">次の設問に進む</h2>
            </form>      
            </div>
    }
}

export default Page_v1;