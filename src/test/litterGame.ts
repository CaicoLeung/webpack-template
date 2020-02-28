import { Context } from 'vm'

/**
 * @constructor person
 * @param { options: Object } 可配置参数
 * @param { options.ctx: Context } 绘图环境
 * @param { options.img: CanvasImageSource } 小人图像资源
 * @param { options.crosswiseFrame: number } 横向框架
 * @param { options.lengthwaysFrame: number } 纵向框架
 * @param { options.speed: number } 速度
 * @param { options.x: number } 起始位置x
 * @param { options.y: number } 起始位置y
 */

export default class Person {
  ctx: Context;
  img: HTMLImageElement;
  crosswiseFrame: number;
  lengthwaysFrame: number;
  speed: number;
  x: number;
  y: number;

  index = 0; // 帧数
  direction = 0; // 方向
  width: number;
  height: number;

  constructor (options: {
    ctx: Context
    img: HTMLImageElement
    crosswiseFrame: number
    lengthwaysFrame: number
    x?: number
    y?: number
    speed?: number
  }) {
    this.ctx = options.ctx
    this.img = options.img
    this.crosswiseFrame = options.crosswiseFrame
    this.lengthwaysFrame = options.crosswiseFrame
    this.speed = options.speed || 2
    this.x = options.x || 50
    this.y = options.y || 50
    this.width = this.img.width / this.crosswiseFrame
    this.height = this.img.height / this.lengthwaysFrame
  }

  draw () {
    this.ctx.drawImage(
      this.img,
      this.width * this.index,
      this.height * this.direction,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    )
    this.update()
  }

  // 计算小人下一帧绘制所需的数据
  // 这里要更新小人某动作的第几帧
  // 还要更新小人最新的坐标
  update () {
    this.index = ++this.index % this.crosswiseFrame
    switch (this.direction) {
    case 0:
      this.y += this.speed
      this.y = this.y > this.ctx.canvas.width ? -this.height : this.y
      break
    case 1:
      this.x -= this.speed
      this.x = this.x < -this.width ? this.ctx.canvas.width : this.x
      break
    case 2:
      this.x += this.speed
      this.x = this.x > this.ctx.canvas.width ? -this.width : this.x
      break
    case 3:
      this.y -= this.speed
      this.y = this.y < -this.height ? this.ctx.canvas.height : this.y
      break
    default:
      throw Error('update错误')
    }
  }

  // 根据keyCode修改小人的方向
  changeDirection (keyCode: number) {
    switch (keyCode) {
    case 37:
      this.direction = 1
      break
    case 38:
      this.direction = 3
      break
    case 39:
      this.direction = 2
      break
    case 40:
      this.direction = 0
      break
    default:
      throw Error('不合法的按键')
    }
  }
}
