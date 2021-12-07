// JavaScript Document
var chartDom = document.getElementById('chartone');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '2020年保护项目',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
	  label:{            //饼图图形上的文本标签
           	normal:{
            	show:true,
				position:'inner', //标签的位置
            	textStyle : {
            		fontWeight : 300 ,
            		fontSize : 12    //文字的字体大小
                                },
            	formatter:'{d}%'}
             },

      data: [
        { value: 1048, name: '宪法保护' },
        { value: 735, name: '广泛保护' },
        { value: 580, name: '就业保护' },
        { value: 484, name: '轻度保护' },
        { value: 300, name: '中立' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);