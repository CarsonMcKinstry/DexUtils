import React, {Component, Fragment} from 'react';
import map from 'lodash/fp/map';
import keys from 'lodash/fp/keys';
import compose from 'lodash/fp/compose';
// import FormGrid from '../Form/FormGrid';
import styled from 'styled-components';
import Button from '../Button/Button';


const Form = styled.form`
  height: ${ props => props.open ? 'auto' : 0};
  overflow: hidden;
  @media screen and (max-width: ${ props => props.theme.screenSizes.medium }) {
    overflow: scroll;
  }
`

const formGridBorder = props => {
  const { theme } = props;
  const { utils: { hexAlpha} } = theme;

  return props.open ? `1px solid ${ hexAlpha(theme.env.bodyBlack, 0.25)};` : 'none'
}

const FormGrid = styled.div`
  display: grid;
  grid-gap: 6px;
  grid-template-columns: 20px 60px 120px 160px 200px;
  padding: 12px 0;
  width: 100%;
  border-top: ${ formGridBorder };
  border-bottom: ${ formGridBorder };
  margin-bottom: 12px;
`

const methodsEnum = {
  'is': 'is',
  'is not': 'isNot',
  'like': 'like',
  'not like': 'notLike',
  'starts with': 'startsWith',
  'does not start with': 'doesNotStartWith',
  'greater than': 'greaterThan',
  'less than': 'lessThan'
};

const MethodSelect = props => {
  const methodOptions = (methods) => compose(
    map(method => (
      <option 
        value={methods[method]}
        key={method}
      >
        { method }
      </option>
    )),
    keys
  )(methods)

  return (
    <select {...props} >
      { methodOptions(methodsEnum) }
    </select>
  ) 
}

class AdvancedSearch extends Component {

  state = {
    queryArray: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.schema.length > 0 && this.props.schema.length !== prevProps.schema.length) {
      this.setQueryArray();
    }
  }

  setQueryArray = (cb) => {
    const { schema } = this.props;
    this.setState({
      queryArray: schema.map(key => {
        return {
          key, 
          query: '',
          method: 'is',
          operator: 'and',
          use: false
        }
      })
    }, cb);
  }

  toggleCheckbox = (e) => {
    const [key, id] = e.target.id.split('-');
    this.setState(prevState => {
      return {
        queryArray: prevState.queryArray.map((v, i) => {
          if (i === Number(id)) {
            return {
              ...v,
              [key]: !v[key]
            }
          }
          return v;
         })
      }
    })
  }

  handleChange = (e) => {
    const [key, id] = e.target.id.split('-');
    const val = e.target.value;
    this.setState(prevState => {
      return {
        queryArray: prevState.queryArray.map((v, i) => {
          if (i === Number(id)) {
            return {
              ...v,
              [key]: val
            }
          }
          return v;
        })
      }
    })
  }

  renderFormFields = () => {
    const { queryArray } = this.state;

    return queryArray.map((q, i) => (
      <Fragment key={ q.key }>
        <input 
          id={ `use-${i}`}
          type="checkbox" 
          value={ queryArray[i].use }
          onClick={ this.toggleCheckbox }
        />
        <select 
          id={`operator-${i}`} 
          value={queryArray[i].operator} 
          onChange={ this.handleChange }
          disabled={ !queryArray[i].use }
        >
          <option value="and">and</option>
          <option value="or">or</option>
        </select>
        <div>{ q.key }</div>
        <MethodSelect 
          id={`method-${i}`} 
          value={queryArray[i].method}
          onChange={ this.handleChange }
          disabled={ !queryArray[i].use }
        />
        <input
          id={`query-${i}`}
          value={queryArray[i].query}
          onChange={ this.handleChange }
          disabled={ !queryArray[i].use }
        />
      </Fragment>
    ));
  }

  handleSearch = (e) => {
    e.preventDefault();
    const { handleSearch } = this.props;
    const { queryArray } = this.state;
    handleSearch(queryArray);
  }

  reset = (e) => {
    this.setQueryArray(() => {
      this.props.reset();
    });
    
  }

  render(){
    return(
      <Form onSubmit={ this.handleSearch } open={ this.props.open }>
        <FormGrid open={ this.props.open }>
          {this.renderFormFields() }
        </FormGrid>
        <div>
          <Button unelevated inline type="submit">Search</Button>
          <Button unelevated inline type="reset" onClick={this.reset}>Reset</Button>
        </div>
      </Form>
    );
  }
}

AdvancedSearch.propTypes = {}

export default AdvancedSearch;