import {Button, ButtonGroup} from './components/Button'
import {Table, TableCell, TableCol} from './components/Data/Table'
import {Container, Row, Col} from './components/Grid'
import {CheckBox, CheckBoxGroup, Form, FormItem, Input, Radio, RadioGroup, Select, Option} from './components/Form'
import {CodeCollapse, CodeSnippet, Content} from './components/Other'

const components = {
  Button,
  ButtonGroup,
  Table,
  TableCell,
  TableCol,
  Container,
  Row,
  Col,
  CheckBox,
  CheckBoxGroup,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Select,
  Option,
  CodeCollapse,
  CodeSnippet,
  Content
}

const install = function (Vue, opts = {}) {
  if (install.installed) return

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

export default {
  install
}
