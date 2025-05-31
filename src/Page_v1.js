import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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
            custom_mail_purpose: '',
            copied: false,
            showSpeech: false
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
    handleCopy = () => {
        console.log("コピー関数起動")
        navigator.clipboard.writeText(this.state.output_text).then(() => {
            this.setState({ copied: true });
        }).catch(err => {
            console.error("コピーに失敗しました:", err);
        });
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
        console.log("コピーした？:", this.state.copied);        

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
`

        let input_school_name_string = ""
        if(this.state.hope === "next_school" && this.state.input_school_name === "custom"){
            input_school_name_string = `具体的には、${this.state.custom_school_name}に行きたいです。
`
        }

        let input_company_name_string = ""
        if(this.state.hope === "get_job" && this.state.input_company_name === "custom"){
            input_company_name_string = `具体的には、${this.state.custom_company_name}に行きたいです。
`
        }

        let mail_purpose_string = ""
        if(this.state.mail_purpose === "part_time"){
            mail_purpose_string = `アルバイト採用試験の応募のためのメールを書きたいです。
`
        }else if(this.state.mail_purpose === "intern"){
            mail_purpose_string = `企業にインターンシップの受付をお願いするためのメールを書きたいです。
`
        }else if(this.state.mail_purpose === "job"){
            mail_purpose_string = `企業に就職試験に応募するためのメールを書きたいです。
`
        }else if(this.state.mail_purpose === "other"){
            mail_purpose_string = `${this.state.custom_mail_purpose}のためのメールを書きたいです。
`
        }

        let choiced_prompt = ``
        if(this.state.route==="what_is_next_route"){
            choiced_prompt=`${field_string}${hope_string}
この先のことを、一緒に考えて欲しいです。
`
        }else if(this.state.route==="write_choice_reason"){
            choiced_prompt=`${field_string}${hope_string}
${input_school_name_string}${input_company_name_string}志望動機を考えるのを手伝ってほしいです。
`
        }else if(this.state.route==="write_my_appeal"){
            choiced_prompt=`${field_string}${hope_string}
${input_school_name_string}${input_company_name_string}自己PRを考えるのを手伝ってほしいです。
`
        }else if(this.state.route==="write_business_mail"){
            choiced_prompt=`${mail_purpose_string}メールの文面を考えるのを手伝ってほしいです。
`
        }else if(this.state.route==="unknown"){
            choiced_prompt=`${field_string}${hope_string}
何となく、この先のことが不安なので、助けて欲しいです。
`
        }


        let output_prompt = `${general_prompt}${choiced_prompt}`

        // textareaの出力値を更新
        this.setState({
            output_text: output_prompt,
        }, () => {
            // スクロールして処方箋に移動
            setTimeout(() => {
                const element = document.getElementById("prescription-card");
                element?.scrollIntoView({ behavior: "smooth" });
            }, 100);

        });
    }

    render(){
        return <div className="container mt-3">
            <h1 className="display-4 text-center">ミライエ・ユメミルクリニック</h1>
            <h1 className="display-6 text-center">進学・就職科</h1>
            <br/>
            <form>
                <fieldset className="card">
                    <div className="card-header card-head-yellow">
                        <legend className="card-title">相談したいこと</legend>
                    </div>
                    <div className="card-body">
                        <label>
                            <input className="card-text" type="radio" name="route" value="what_is_next_route" checked={this.state.route === "what_is_next_route"} onChange={this.handleRouteChange} />
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
                    </div>
                </fieldset>
                <br />                
                <fieldset className="card is">
                    <div className="card-header card-head-brown">
                        <legend className="card-title">通っている学校について</legend>
                    </div>
                    <div className="card-body">
                        <label>
                            <input className="card-text" type="radio" name="school" value="middle" checked={this.state.school === "middle"} onChange={this.handleSchoolChange} />
                            中学校
                        </label><br />
                        <label>
                            <input className="card-text" type="radio" name="school" value="high" checked={this.state.school === "high"} onChange={this.handleSchoolChange} />
                            高校
                        </label><br />
                        <label>
                            <input className="card-text" type="radio" name="school" value="high_tech" checked={this.state.school === "high_tech"} onChange={this.handleSchoolChange} />
                            高専
                        </label><br />
                        <label>
                            <input className="card-text" type="radio" name="school" value="training" checked={this.state.school === "training"} onChange={this.handleSchoolChange} />
                            専門学校
                        </label><br />
                        <label>
                            <input className="card-text" type="radio" name="school" value="college" checked={this.state.school === "college"} onChange={this.handleSchoolChange} />
                            大学
                        </label>
                    </div>
                </fieldset>
                <br />    
                <fieldset className="card">
                    <div className="card-header card-head-brown">
                        <legend className="card-title">学年について</legend>
                    </div>
                    <div className="card-body">
                        <label>
                            <input className="card-text" type="radio" name="grade" value="g1" checked={this.state.grade === "g1"} onChange={this.handleGradeChange} />
                            １年生
                        </label><br />
                        <label>
                            <input className="card-text" type="radio" name="grade" value="g2" checked={this.state.grade === "g2"} onChange={this.handleGradeChange} />
                            ２年生
                        </label><br />
                        <label>
                            <input className="card-text" type="radio" name="grade" value="g3" checked={this.state.grade === "g3"} onChange={this.handleGradeChange} />
                            ３年生
                        </label><br />

                        {/* 中学校でない場合のみ表示 */}
                        {(this.state.school === "high_tech" || this.state.school === "college") && (
                            <>
                            <label>
                                <input className="card-text" type="radio" name="grade" value="g4" checked={this.state.grade === "g4"} onChange={this.handleGradeChange} />
                                ４年生（大学生、高専生用）
                            </label><br />
                            </>
                        )}
                        {this.state.school === "high_tech" && (
                            <>
                            <label>
                                <input className="card-text" type="radio" name="grade" value="g5" checked={this.state.grade === "g5"} onChange={this.handleGradeChange} />
                                ５年生（高専生用）
                            </label><br />
                            </>
                        )}           
                    </div>
                </fieldset>
                <br/>
                <fieldset className="card">
                    <div className="card-header card-head-brown">
                        <legend className="card-title">性別について</legend>
                    </div>
                    <div className="card-body">
                        <label>
                            <input className="card-text" type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleGenderChange} />
                            男性
                        </label><br />
                        <label>
                            <input className="card-text" type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleGenderChange} />
                            女性
                        </label>
                    </div>

                </fieldset>
                <br />  
                <fieldset className="card">
                    <div className="card-header card-head-brown">
                        <legend className="card-title">説明の詳しさ</legend>
                    </div>
                    <div className="card-body">
                        <label>
                            <input
                            className="card-text" 
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
                            className="card-text" 
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
                            className="card-text" 
                            type="radio"
                            name="explain_detail"
                            value="detailed"
                            checked={this.state.explain_detail === "detailed"}
                            onChange={this.handleExplainDetailChange}
                            />
                            文章が長くても良いので、詳しく説明してほしい
                        </label>          
                    </div>

                </fieldset>
                <br />
                {
                (
                (this.state.route === "what_is_next_route") || (this.state.route === "write_choice_reason") || (this.state.route === "write_my_appeal") || (this.state.route === "unknown")
                )&& (
                    <>
                        <fieldset className="card">
                            <div className="card-header card-head-blue">
                                <legend className="card-title">進学、就職、どっちにしたい？</legend>
                            </div>
                            <div className="card-body">
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
                            </div>

                        </fieldset>
                        <br />
                    </>
                )}
                {
                (
                (this.state.route === "what_is_next_route") || (this.state.route === "write_choice_reason")|| (this.state.route === "write_my_appeal")
                )&& (
                    <>
                        <fieldset className="card">
                            <div className="card-header card-head-blue">
                                <legend className="card-title">どんな分野に進みたい？</legend>
                            </div>
                            <div className="card-body">
                                <label>
                                    <input
                                    className="card-text" 
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
                                    className="card-text" 
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
                                    className="card-text" 
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
                                    className="card-text" 
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
                                    className="card-text form-control mt-2" 
                                    type="text"
                                    placeholder="どんな分野か教えてください。例：情報工学、教育、芸術 など"
                                    value={this.state.custom_field_detail}
                                    onChange={this.handleCustomFieldDetailChange}
                                    />
                                )}
                            </div>


                        </fieldset>
                        <br />
                    </>
                )}                
                {
                ((this.state.route === "write_choice_reason")|| (this.state.route === "write_my_appeal"))
                && (this.state.hope === "next_school")
                 && (
                    <>
                        <fieldset className="card">
                            <div className="card-header card-head-blue">
                                <legend className="card-title">行きたい学校、もう決めてる？</legend>
                            </div>
                            <div className="card-body">
                                {/* これから決める */}
                                <label>
                                    <input
                                    className="card-text"
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
                                    className="card-text"
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
                                    className="card-text form-control mt-2"
                                    placeholder="具体的な学校名や、大体のイメージを入力してください"
                                    value={this.state.custom_school_name}
                                    onChange={this.handleCustomSchoolNameChange}
                                    />
                                )}
                            </div>


                        </fieldset>
                        <br />
                    </>
                )}
                {
                ((this.state.route === "write_choice_reason")|| (this.state.route === "write_my_appeal"))
                && (this.state.hope === "get_job")
                 && (
                    <>
                        <fieldset className="card">
                            <div className="card-header card-head-blue">
                                <legend className="card-title">行きたい会社、もう決めてる？</legend>
                            </div>
                            <div className="card-body">
                                {/* これから決める */}
                                <label>
                                    <input
                                    className="card-text"
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
                                    className="card-text"
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
                                    className="card-text form-control mt-2"
                                    placeholder="具体的な会社の名前や、大体のイメージを入力してください"
                                    value={this.state.custom_company_name}
                                    onChange={this.handleCustomCompanyNameChange}
                                    />
                                )}
                            </div>


                        </fieldset>
                        <br />
                    </>
                )}
                {
                (this.state.route === "write_business_mail")
                && (
                    <>
                        <fieldset className="card">
                            <div className="card-header card-head-blue">
                                <legend className="card-title">何のためにメールを書きたい？</legend>
                            </div>
                            <div className="card-body">
                                <label>
                                    <input
                                    className="card-text" 
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
                                    className="card-text" 
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
                                    className="card-text" 
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
                                    className="card-text" 
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
                                    className="card-text form-control mt-2"
                                    placeholder="なんのためにメールを書きたいですか？"
                                    value={this.state.custom_mail_purpose}
                                    onChange={this.handleCustomMailPurposeChange}
                                    />
                                )}
                            </div>


                        </fieldset>
                        <br />
                    </>
                )}
                <div className="text-center">
                    <img src="/images/cat_doctor_face.png" alt="説明" style={{ maxWidth: "300px", height: "auto" }}/>
                    <br/>
                    <br/>
                    <button type="button" className="btn btn-primary" onClick={this.handleNextPage}>
                        先生、お願いします！
                    </button>

                </div>
                <br/>
                {
                    (this.state.output_text !== "")
                    && (
                        <>
                            <div id="prescription-card" className="fade-in">
                                <fieldset className="card">
                                    <div className="card-header card-head-yellow">
                                        <legend className="card-title">ベンジャミン先生の処方箋</legend>
                                    </div>
                                    <div className="card-body">
                                        {/* ベンジャミン先生の処方箋 */}
                                        <div className="position-relative">
                                            <textarea
                                                name="output_area"
                                                disabled={true}
                                                value={this.state.output_text}
                                                className="card-text form-control"
                                                rows={10}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className={`btn ${this.state.copied ? "btn-success" : "btn-primary"} position-absolute`}
                                            style={{ top: '80px', right: '20px' }}
                                            onClick={this.handleCopy}>
                                        {this.state.copied ? "コピーしました！" : "コピー"}
                                        </button>  
                                    </div>
                                </fieldset>
                            </div>      
                            
                        </>
                    )
                }
            </form>      
            </div>
    }
}

export default Page_v1;