// style.js - 完整配置
(function () {
  // 确保 DOM 加载完成
  if (typeof echarts === 'undefined') {
    console.error('ECharts 未加载！');
    return;
  }

  // 初始化图表
  var myChart = echarts.init(document.getElementById('main'));

  var option = {
    title: {
      text: '🌍 全球旅行足迹',
      left: 'center',
      top: 10,
      textStyle: {
        fontSize: 20,
        color: '#333'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        if (params.name) {
          return '<b>' + params.name + '</b><br/>点击查看详情';
        }
        return '';
      }
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1,
      inRange: {
        color: ['#f0f9ff', '#61a0a8']
      }
    },
    series: [
      {
        type: 'map',
        map: 'world',
        roam: true,
        zoom: 1.2,
        center: [105, 38], // 默认聚焦中国
        label: {
          show: false,
          emphasis: {
            show: true,
            color: '#fff',
            fontWeight: 'bold'
          }
        },
        itemStyle: {
          areaColor: '#e6f7ff',
          borderColor: '#91c7ae',
          borderWidth: 0.5
        },
        emphasis: {
          itemStyle: {
            areaColor: '#61a0a8'
          }
        },
        // 示例数据：标记你去过的区县（可选）
        // data: [
        //   { name: '海淀区', selected: true },
        //   { name: '南山区', selected: true },
        //   { name: 'Brazil', selected: true }
        // ]
      }
    ]
  };

  myChart.setOption(option);

  // 响应窗口大小变化
  window.addEventListener('resize', function () {
    myChart.resize();
  });

  // 点击事件
  myChart.on('click', function (params) {
    if (params.name) {
      alert('📍 你点击了：' + params.name);
    }
  });
})();