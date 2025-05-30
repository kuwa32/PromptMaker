import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Page_v1 extends React.Component{
    link_url = "https://www.google.com/"
    page_state=1;

    constructor(props){
        super(props)
        this.state = {
            output_text: '',  // ← 出力エリアの初期値
            school: '',
            grade: '',
            gender: '',
            explain_detail: "normal",
            route: '',
            hope: '',
            field: '',
            input_school_name: '',
            input_company_name: '',
            mail_purpose: '',
            custom_field_detail:'',
            custom_school_name: '',
            custom_company_name: '',
            custom_mail_purpose: ''
        };
        this.handleNextPage = this.handleNextPage.bind(this);
    }

    handleSchoolChange = (e) => {
        this.setState({ school: e.target.value });
    };

    handleGradeChange = (e) => {
        this.setState({ grade: e.target.value });
    };
    
    handleGenderChange = (e) => {
        this.setState({ gender: e.target.value });
    };
    handleExplainDetailChange = (event) => {
        this.setState({ explain_detail: event.target.value });
    };
    handleRouteChange = (e) => {
        this.setState({ route: e.target.value });
    };    

    handleHopeChange = (e) => {
        this.setState({ hope: e.target.value });
    };
    handleFieldChange = (e) => {
        this.setState({ field: e.target.value });
    };
    handleInputSchoolNameChange = (e) => {
        this.setState({ input_school_name: e.target.value });
    };
    handleInputCompanyNameChange = (e) => {
        this.setState({ input_company_name: e.target.value });
    };
    handleMailPurposeChange = (e) => {
        this.setState({ mail_purpose: e.target.value });
    };
    handleCustomFieldDetailChange = (event) => {
        this.setState({ custom_field_detail: event.target.value });
    };
    handleCustomSchoolNameChange = (event) => {
        this.setState({ custom_school_name: event.target.value });
    };
    handleCustomCompanyNameChange = (event) => {
        this.setState({ custom_company_name: event.target.value });
    };
    handleCustomMailPurposeChange = (event) => {
        this.setState({ custom_mail_purpose: event.target.value });
    };

    // ボタンが押されたときに実行される関数
    handleNextPage() {
//        const school = document.querySelector('input[name="school"]:checked')?.value;
 //       const grade = document.querySelector('input[name="grade"]:checked')?.value;
  //      const gender = document.querySelector('input[name="gender"]:checked')?.value;
   //     const route = document.querySelector('input[name="route"]:checked')?.value;

        console.log("選択された値:");
        console.log("学校:", this.state.school);
        console.log("学年:", this.state.grade);
        console.log("性別:", this.state.gender);
        console.log("説明の詳しさ:", this.state.explain_detail);
        console.log("相談内容:", this.state.route);
        console.log("進路:", this.state.hope);
        console.log("分野:", this.state.field);
        console.log("学校名:", this.state.input_school_name);
        console.log("企業名:", this.state.input_company_name);
        console.log("メール目的:", this.state.mail_purpose);
        console.log("カスタム入力分野:", this.state.custom_field_detail);
        console.log("カスタム入力学校名:", this.state.custom_school_name);
        console.log("カスタム入力企業名:", this.state.custom_company_name);
        console.log("カスタム入力メール目的:", this.state.custom_mail_purpose);        

        let school_string = "未入力"
        if(this.state.school==="middle"){
            school_string = "中学校"
        }else if(this.state.school==="high"){
            school_string = "高校"
        }else if(this.state.school==="high_tech"){
            school_string = "高専"
        }else if(this.state.school==="training"){
            school_string = "専門学校"
        }else if(this.state.school==="college"){
            school_string = "大学"
        }

        let grade_string = "未入力"
        if(this.state.grade==="g1"){
            grade_string = "1年生"
        }else if(this.state.grade==="g2"){
            grade_string = "2年生"
        }else if(this.state.grade==="g3"){
            grade_string = "3年生"
        }else if(this.state.grade==="g4"){
            grade_string = "4年生"
        }else if(this.state.grade==="g5"){
            grade_string = "5年生"
        }

        let gender_string = "未入力"
        if(this.state.gender==="male"){
            gender_string = "男性"
        }else if(this.state.gender==="female"){
            gender_string = "女性"
        }

        let explain_detail_string = ""
        if(this.state.explain_detail==="simple"){
            explain_detail_string = "読むのが大変なので、簡単に説明してほしいです。"
        }else if(this.state.explain_detail==="detailed"){
            explain_detail_string = "文章が長くても良いので、詳しく説明してほしいです。"
        }

        let hope_string = "未入力"
        if(this.state.hope==="next_school"){
            hope_string = "進学したいと考えています。"
        }else if(this.state.hope==="get_job"){
            hope_string = "就職したいと考えています。"
        }else if(this.state.hope==="unknown"){
            hope_string = "進学するか、就職するかはまだ決めていないです。"
        }

        let field_string = ""
        if (this.state.field === "science") {
            field_string = "理系の分野に進みたくて、";
        } else if (this.state.field === "arts") {
            field_string = "文系の分野に進みたくて、";
        }else if(this.state.field==="unknown"){
            field_string = ""
        }else if(this.state.field==="custom"){
            field_string = this.state.custom_field_detail + "の分野に進みたくて、"
        }      

        let general_prompt =`あなたは、高校や、大学の進路相談のプロです。
必要に応じた適切なフレームワーク思考や、テクニックを用いながら、ユーザーの質問に対応してください。
また、ユーザー便益の最大化のために情報が不足していれば、事前に質問や確認をしてください。
私は、${school_string}の${grade_string}で、${gender_string}です。${explain_detail_string}
${field_string}${hope_string}
`

        let input_school_name_string = ""
        if(this.state.input_school_name === "custom"){
            input_school_name_string = this.state.custom_school_name + "に行きたいです。"
        }

        let input_company_name_string = ""
        if(this.state.input_company_name === "custom"){
            input_company_name_string = this.state.custom_company_name + "に行きたいです。"
        }

        let choiced_prompt = ``
        if(this.state.route==="what_is_next_route"){
            choiced_prompt=`この先のことを、一緒に考えて欲しいです。
`
        }else if(this.state.route==="write_choice_reason"){
            choiced_prompt=`志望動機を考えるのを手伝ってほしいです。
`
        }else if(this.state.route==="write_my_appeal"){
            choiced_prompt=`自己PRを考えるのを手伝ってほしいです。
`
        }else if(this.state.route==="write_business_mail"){
            choiced_prompt=`メールの文面を考えるのを手伝ってほしいです。
`
        }else if(this.state.route==="unknown"){
            choiced_prompt=`何となく、この先のことが不安なので、助けて欲しいです。
`
        }


        let output_prompt = `${general_prompt}${choiced_prompt}`

        // textareaの出力値を更新
        this.setState({ output_text: output_prompt });
    }

    render(){
        return <div className="container mt-3">
            <h1 className="bg-primary text-white display-4">ミライエ・ユメミルクリニック　処方箋</h1>
            <form>
                <fieldset>
                <legend className="alert alert-primary">相談したいこと</legend>
                <label>
                    <input type="radio" name="route" value="what_is_next_route" checked={this.state.route === "what_is_next_route"} onChange={this.handleRouteChange} />
                    全体的に、進路のことを相談したい
                </label><br />
                <label>
                    <input type="radio" name="route" value="write_choice_reason" checked={this.state.route === "write_choice_reason"} onChange={this.handleRouteChange} />
                    志望動機に何を書けば良いか、相談したい
                </label><br />
                <label>
                    <input type="radio" name="route" value="write_my_appeal" checked={this.state.route === "write_my_appeal"} onChange={this.handleRouteChange} />
                    強みや弱み、自己PRについて相談したい
                </label><br />
                <label>
                    <input type="radio" name="route" value="write_business_mail" checked={this.state.route === "write_business_mail"} onChange={this.handleRouteChange} />
                    ビジネスメールの書き方を相談したい
                </label><br />
                <label>
                <input type="radio" name="route" value="unknown" checked={this.state.route === "unknown"} onChange={this.handleRouteChange} />
                    まだ決まっていないが、何となく不安
                </label>
                </fieldset>
                <br />                
                <fieldset>
                <legend className="alert alert-primary">学校</legend>
                <label>
                    <input type="radio" name="school" value="middle" checked={this.state.school === "middle"} onChange={this.handleSchoolChange} />
                    中学校
                </label><br />
                <label>
                    <input type="radio" name="school" value="high" checked={this.state.school === "high"} onChange={this.handleSchoolChange} />
                    高校
                </label><br />
                <label>
                    <input type="radio" name="school" value="high_tech" checked={this.state.school === "high_tech"} onChange={this.handleSchoolChange} />
                    高専
                </label><br />
                <label>
                    <input type="radio" name="school" value="training" checked={this.state.school === "training"} onChange={this.handleSchoolChange} />
                    専門学校
                </label><br />
                <label>
                    <input type="radio" name="school" value="college" checked={this.state.school === "college"} onChange={this.handleSchoolChange} />
                    大学
                </label>
                </fieldset>

                <fieldset>
                <legend className="alert alert-primary">学年</legend>
                <label>
                    <input type="radio" name="grade" value="g1" checked={this.state.grade === "g1"} onChange={this.handleGradeChange} />
                    1年
                </label><br />
                <label>
                    <input type="radio" name="grade" value="g2" checked={this.state.grade === "g2"} onChange={this.handleGradeChange} />
                    2年
                </label><br />
                <label>
                    <input type="radio" name="grade" value="g3" checked={this.state.grade === "g3"} onChange={this.handleGradeChange} />
                    3年
                </label><br />

                {/* 中学校でない場合のみ表示 */}
                {(this.state.school === "high_tech" || this.state.school === "college") && (
                    <>
                    <label>
                        <input type="radio" name="grade" value="g4" checked={this.state.grade === "g4"} onChange={this.handleGradeChange} />
                        4年（大学生、高専生用）
                    </label><br />
                    </>
                )}
                {this.state.school === "high_tech" && (
                    <>
                    <label>
                        <input type="radio" name="grade" value="g5" checked={this.state.grade === "g5"} onChange={this.handleGradeChange} />
                        5年（高専生用）
                    </label><br />
                    </>
                )}                
                </fieldset>

                <fieldset>
                <legend className="alert alert-primary">性別</legend>
                <label>
                    <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleGenderChange} />
                    男性
                </label><br />
                <label>
                    <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleGenderChange} />
                    女性
                </label>
                </fieldset>

                <fieldset>
                <legend className="alert alert-primary">説明の詳しさ</legend>
                <label>
                    <input
                    type="radio"
                    name="explain_detail"
                    value="normal"
                    checked={this.state.explain_detail === "normal"}
                    onChange={this.handleExplainDetailChange}
                    />
                    普通ぐらいで良い
                </label><br />
                <label>
                    <input
                    type="radio"
                    name="explain_detail"
                    value="simple"
                    checked={this.state.explain_detail === "simple"}
                    onChange={this.handleExplainDetailChange}
                    />
                    読むのが大変なので、簡単に説明してほしい
                </label><br />
                <label>
                    <input
                    type="radio"
                    name="explain_detail"
                    value="detailed"
                    checked={this.state.explain_detail === "detailed"}
                    onChange={this.handleExplainDetailChange}
                    />
                    文章が長くても良いので、詳しく説明してほしい
                </label>          
                </fieldset>

                {(
                    <>
                        <fieldset>
                        <legend className="alert alert-success">進学、就職、どっちにしたい？</legend>
                        <label>
                            <input type="radio" name="hope" value="next_school" checked={this.state.hope === "next_school"} onChange={this.handleHopeChange} />
                            進学したい
                        </label><br />
                        <label>
                            <input type="radio" name="hope" value="get_job" checked={this.state.hope === "get_job"} onChange={this.handleHopeChange} />
                            就職したい
                        </label><br />
                        <label>
                            <input type="radio" name="hope" value="unknown" checked={this.state.hope === "unknown"} onChange={this.handleHopeChange} />
                            まだ決めていない
                        </label>
                        </fieldset>
                    </>
                )}

                {this.state.route === "what_is_next_route" && (
                    <>
                        <fieldset>
                        <legend className="alert alert-primary">どんな分野に進みたい？</legend>
                        <label>
                            <input
                            type="radio"
                            name="field"
                            value="science"
                            checked={this.state.field === "science"}
                            onChange={this.handleFieldChange}
                            />
                            理系
                        </label><br />
                        <label>
                            <input
                            type="radio"
                            name="field"
                            value="arts"
                            checked={this.state.field === "arts"}
                            onChange={this.handleFieldChange}
                            />
                            文系
                        </label><br />
                        <label>
                            <input
                            type="radio"
                            name="field"
                            value="unknown"
                            checked={this.state.field === "unknown"}
                            onChange={this.handleFieldChange}
                            />
                            決めていない
                        </label><br />
                        {/* 具体的な分野 */}
                        <label>
                            <input
                            type="radio"
                            name="field"
                            value="custom"
                            checked={this.state.field === "custom"}
                            onChange={this.handleFieldChange}
                            />
                            こんな分野に進みたい
                        </label>
                        <br />

                        {/* 入力フィールド（選択時のみ表示） */}
                        {this.state.field === "custom" && (
                            <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="例：情報工学、教育、芸術 など"
                            value={this.state.custom_field_detail}
                            onChange={this.handleCustomFieldDetailChange}
                            />
                        )}

                        </fieldset>
                    </>
                )}                

                {this.state.route === "what_is_next_route" && (
                    <>
                        <fieldset>
                        <legend className="alert alert-primary">どんな学校に行きたい？</legend>

                        {/* これから決める */}
                        <label>
                            <input
                            type="radio"
                            name="input_school_name"
                            value="undecided"
                            checked={this.state.input_school_name === "undecided"}
                            onChange={this.handleInputSchoolNameChange}
                            />
                            これから決める
                        </label><br />

                        {/* 入力する */}
                        <label>
                            <input
                            type="radio"
                            name="input_school_name"
                            value="custom"
                            checked={this.state.input_school_name === "custom"}
                            onChange={this.handleInputSchoolNameChange}
                            />
                            こんな学校に行きたい
                        </label><br />

                        {/* 学校名入力欄（選ばれたときだけ表示） */}
                        {this.state.input_school_name === "custom" && (
                            <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="学校名を入力してください"
                            value={this.state.custom_school_name}
                            onChange={this.handleCustomSchoolNameChange}
                            />
                        )}
                        </fieldset>
                    </>
                )}

                {this.state.route === "what_is_next_route" && (
                    <>
                        <fieldset>
                        <legend className="alert alert-primary">どんな会社に行きたい？</legend>

                        {/* これから決める */}
                        <label>
                            <input
                            type="radio"
                            name="input_company_name"
                            value="undecided"
                            checked={this.state.input_company_name === "undecided"}
                            onChange={this.handleInputCompanyNameChange}
                            />
                            これから決める
                        </label><br />

                        {/* 入力する */}
                        <label>
                            <input
                            type="radio"
                            name="input_company_name"
                            value="custom"
                            checked={this.state.input_company_name === "custom"}
                            onChange={this.handleInputCompanyNameChange}
                            />
                            こんな会社に行きたい
                        </label><br />

                        {/* 企業名入力欄（選ばれたときだけ表示） */}
                        {this.state.input_company_name === "custom" && (
                            <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="企業名を入力してください"
                            value={this.state.custom_company_name}
                            onChange={this.handleCustomCompanyNameChange}
                            />
                        )}
                        </fieldset>
                    </>
                )}

                {this.state.route === "what_is_next_route" && (
                    <>
                        <fieldset>
                        <legend className="alert alert-primary">何のためにメールを書きたい？</legend>

                        <label>
                            <input
                            type="radio"
                            name="mail_purpose"
                            value="part_time"
                            checked={this.state.mail_purpose === "part_time"}
                            onChange={this.handleMailPurposeChange}
                            />
                            アルバイトの採用試験のため
                        </label><br />

                        <label>
                            <input
                            type="radio"
                            name="mail_purpose"
                            value="intern"
                            checked={this.state.mail_purpose === "intern"}
                            onChange={this.handleMailPurposeChange}
                            />
                            インターンシップのお願いのため
                        </label><br />

                        <label>
                            <input
                            type="radio"
                            name="mail_purpose"
                            value="job"
                            checked={this.state.mail_purpose === "job"}
                            onChange={this.handleMailPurposeChange}
                            />
                            就職試験を受けるため
                        </label><br />

                        <label>
                            <input
                            type="radio"
                            name="mail_purpose"
                            value="other"
                            checked={this.state.mail_purpose === "other"}
                            onChange={this.handleMailPurposeChange}
                            />
                            その他の目的のため
                        </label><br />

                        {this.state.mail_purpose === "other" && (
                            <input
                            type="text"
                            className="form-control mt-2"
                            placeholder="その他の目的を入力してください"
                            value={this.state.custom_mail_purpose}
                            onChange={this.handleCustomMailPurposeChange}
                            />
                        )}
                        </fieldset>
                    </>
                )}

                {/* 次へ進むボタン */}
                <button type="button" className="btn btn-primary" onClick={this.handleNextPage}>
                    次の設問に進む
                </button><br />
                <br />
                {/* ベンジャミン先生の処方箋 */}
                <textarea
                    name="output_area"
                    disabled={true}
                    value={this.state.output_text}
                    className="form-control"
                    rows={5}
                />
            </form>      
            </div>
    }
}

export default Page_v1;