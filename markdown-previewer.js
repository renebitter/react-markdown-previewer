class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            preview: "# H1 goes here\n ## This is the H2 subheading\n\n Lorem **BOLD** ipsum `quotes` dolor sit amet consectetur adipisicing elit. [clickable link](https://www.google.com) periam quam dicta illo vitae blanditiis.\n\nTotam, aliquid numquam a nulla quis sequi, atque debitis rerum molestias assumenda id nisi?\n>Block Quotes\n\nExample Code:\n```\n<textarea id='editor' value={this.state.preview} onChange={this.handleChange}></textarea>\n<div id='preview' dangerouslySetInnerHTML = {{__html: marked(this.state.preview)}}>\n```\n\n List:\n- First\n- Second\n\n![Profile Pic](https://s3-us-west-2.amazonaws.com/s.cdpn.io/888145/profile/profile-80.jpg?1508281354)"
        }
        this.handleChange = this.handleChange.bind(this);

//     const renderer = new marked.Renderer();
//     renderer.link = function (href, title, text) {
//       return `<a target="_blank" href="${href}">${text}` + '</a>';
//     }

//     marked.setOptions({
//       renderer: new marked.Renderer(),
//       gfm: true,
//       tables: true,
//       breaks: true,
//       pedantic: false,
//       sanitize: true,
//       smartLists: true,
//       smartypants: false
//     });

        // marked.setOptions({
        //   breaks: true,
        //   renderer: renderer,
        //   sanitize: true
        // });

    }

    handleChange(event){
        this.setState({
            input: event.target.value,
            preview: event.target.value,
        });
    }


    render() {
        return (
            <div>

            <h2>Editor:</h2>
        <textarea id="editor" value={this.state.preview} onChange={this.handleChange}></textarea>


        <h2>Test 2:</h2>
        <div id="preview" dangerouslySetInnerHTML = {{__html: marked(this.state.preview)}}>

    </div>
        </div>
    );
    }
};

ReactDOM.render(<DisplayMessages />, document.getElementById('challenge-node'));

// document.getElementById('preview').innerHTML =
//       marked('# Marked in the browser\n\nRendered by **marked**.');

