import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

const treeData = [
  { key: '0-0', title: '서울', children:
    [
      { key: '0-0-0', title: '영등포구', children:
        [
          { key: '0-0-0-0', title: '122기' },
        ],
      },
      { key: '0-0-1', title: '잠실', children:
          [
            { key: '0-0-1-0', title: '390기'}, // disableCheckbox: true 하면 클릭안됨
            { key: '0-0-1-1', title: '390-2기' },
          ],
      },
    ],
  },
];

class Demo extends React.Component {
  static propTypes = {
    keys: PropTypes.array,
  };
  static defaultProps = {
    keys: ['0-0-0-0'],
  };
  constructor(props) {
    super(props);
    const keys = props.keys;
    this.state = {
      defaultExpandedKeys: keys,
      defaultSelectedKeys: keys,
      defaultCheckedKeys: keys,
    };
  }

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    this.selKey = info.node.props.eventKey;

    if (this.tree) {
      console.log(
        'Selected DOM node:',
        selectedKeys.map(key => ReactDOM.findDOMNode(this.tree.domTreeNodes[key])),
      );
    }
  };
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };
  
  setTreeRef = (tree) => {
    this.tree = tree;
  };

  render() {   
    return (
      <div style={{ margin: '0 20px' }}>
        <Tree
          className="myCls"
          showLine
          checkable
          selectable={ false }
          defaultExpandAll
          onExpand={this.onExpand}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultCheckedKeys={this.state.defaultCheckedKeys}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
          treeData={treeData}
        />
      </div>
    );
  }
}

export default Demo;