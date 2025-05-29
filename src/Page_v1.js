import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

class Page_v1 extends React.Component{
    link_url = "https://www.google.com/"

    constructor(props){
        super(props)
        this.handleNextPage = this.handleNextPage.bind(this);
    }

    // ボタンが押されたときに実行される関数
    handleNextPage() {
        const school = document.querySelector('input[name="school"]:checked')?.value;
        const grade = document.querySelector('input[name="grade"]:checked')?.value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;
        const route = document.querySelector('input[name="route"]:checked')?.value;

        console.log("選択された値:");
        console.log("学校:", school);
        console.log("学年:", grade);
        console.log("性別:", gender);
        console.log("相談内容:", route);
    }

    render(){
        return <div className="container mt-3">
            <h1 className="bg-primary text-white display-4">ミライエ・ユメミルクリニック　処方箋</h1>
            <form>
                <div className="form-group">
                <legend className="alert alert-primary">お名前（ニックネームでOK！）</legend>
                <label htmlFor="student_name"></label>
                <input type="name" className="form-control" id="student_name"></input>
                </div><br /><br />
                
                <fieldset>
                <legend className="alert alert-primary">学校</legend>
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
                <legend className="alert alert-primary">学年</legend>
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
                    4年（大学生、高専生用）
                </label><br />
                <label>
                    <input type="radio" name="grade" value="g5" />
                    5年（高専生用）
                </label>
                </fieldset>

                <fieldset>
                <legend className="alert alert-primary">性別</legend>
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
                <legend className="alert alert-primary">相談したいこと</legend>
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

                {/* 次へ進むボタン */}
                <button type="button" className="btn btn-primary" onClick={this.handleNextPage}>
                    次の設問に進む
                </button>
            </form>      
            </div>
    }
}

export default Page_v1;