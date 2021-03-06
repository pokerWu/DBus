import React, { PropTypes, Component } from 'react'
import { Form, Select, Input, Button, Row, Col } from 'antd'
import { FormattedMessage } from 'react-intl'
// 导入样式
import styles from './res/styles/index.less'

const FormItem = Form.Item
const Option = Select.Option

export default class EncodePluginSearch extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
  }

  render () {
    const {onOpenUploadModal} = this.props
    return (
      <div className="form-search">
        <Form autoComplete="off" layout="inline" className={styles.searchForm}>
          <Row>
            <Col span={4} className={styles.formLeft}>
              <FormItem>
                <Button
                  type="primary"
                  onClick={onOpenUploadModal}
                >
                  <FormattedMessage
                    id="app.components.projectManage.encodePlugin.uploadEncodePlugin"
                    defaultMessage="上传脱敏插件"
                  />
                </Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

EncodePluginSearch.propTypes = {
}
