<template>
  <Container>
    <h1>数据表格</h1>
    <p>数据表个的基础功能</p>
    <p>
      thead 标签 display:table-header-group 只有border contentarea 没有padding margin<br/>
      tr 标签 display:table-row 也是只有border contentarea 没有padding margin<br/>
      th 标签 font-weigth bold display:table-CodeCollapse 有padding border contentarea 没有margin<br/>
      tbody 标签 display:table-row-group 只有border contentarea 没有margin padding<br/>
      td 标签 display:table-cell
    </p>
    <Row>
      <Col>
        <Content>
          <CodeCollapse :code="``">
            <Table :list="list">
              <TableCol name="编号" property="id"></TableCol>
              <TableCol name="姓名" property="name"></TableCol>
              <TableCol name="生日" property="createTime"></TableCol>
              <TableCol name="操作">
                <template slot-scope="prop">
                  <Button type="primary" @click="handleClick(prop.row)">自定义按钮</Button>
                  <Button type="primary" @click="handleClick2(prop.row)">自定义按钮2</Button>
                </template>
              </TableCol>
            </Table>
            {{current}}
          </CodeCollapse>
        </Content>
      </Col>
    </Row>
  </Container>
</template>
<script>
import Row from "@/components/Grid/Row";
import Col from "@/components/Grid/Col";
import Container from "@/components/Grid/Container";
import Content from "@/components/Other/Content";
import CodeCollapse from "@/components/Other/CodeCollapse";
import Table from "@/components/Data/Table/Table";
import TableCol from "@/components/Data/Table/TableCol";
import TableCell from "@/components/Data/Table/TableCell";
import Button from "@/components/Button/Button";

export default {
  components: {
    Row,
    Col,
    Container,
    Content,
    CodeCollapse,
    Table,
    TableCol,
    TableCell,
    Button
  },
  beforeCreate() {
    var set = new Set('s','sd')
    console.log(Array.from(set))
  },
  methods: {
    handleClick: function(row) {
      this.current = row;
    },
    handleClick2: function(row) {
      this.list.push({ id: 4, name: "sdfsdfs", createTime: "2019-0" });
    }
  },
  data() {
    return {
      current: {},
      list: [
        { id: 1, name: "第一个", createTime: "2017-02-03" },
        { id: 2, name: "第一个", createTime: "2017-02-03" },
        { id: 3, name: "第一个", createTime: "2017-02-03" }
      ]
    };
  }
};
</script>

