
## 主题一、原型.

**一、基于原型的语言的特点**
1 只有对象,没有类;对象继承对象,而不是类继承类。

2  “原型对象”是基于原型语言的核心概念。原型对象是新对象的模板，它将自身的属性共享给新对象。
一个对象不但可以享有自己创建时和运行时定义的属性，
而且可以享有原型对象的属性。

3 除了语言原生的顶级对象，每一个对象都有自己的原型对象，所有对象构成一个树状的层级系统。root节点的顶层对象是一个语言原生的对象，
其他所有对象都直接或间接继承它的属性。

显然，基于原型的语言比基于类的语言简单得多，**我们只需要知道"用对象去创建对象"，就可以在原型的世界里大行其道了！**

**二、基于原型的语言中对象的创建**

创建有两个步骤

**1. 使用"原型对象"作为"模板"生成新对象**

这个步骤是必要的，这是每个对象出生的唯一方式。以原型为模板创建对象，这也是"原型"(prototype)的原意。

**2. 初始化内部属性**

这一步骤不是必要的。通俗点说，就是，对"复制品"不满意，我们可以"再加工"，使之获得不同于"模板"的"个性"。

这两个步骤很自然，也很好理解，比使用类构造对象从概念上简单得多了。对于习惯了java基于类的面向对象的语言的程序员,
这种"新颖"的生成对象的方式一定会让他们感到好奇。

**三、原型，为复用代码而生**

使用原型，能复用代码，节省内存空间
举个例子，存在旧对象oldObject，它有一个属性name，值是’Andy’, 和一个名为getName()的方法，如果以该对象为原型创建一个新对象，



那么新对象newObject同样具有属性name，值也是’Andy’，也有一个方法getName()。值得注意的是，**newObject并不是在内存中克隆了oldObject，
它只是引用了oldObject的属性,** 导致实际的效果好像"复制"了newObject一样。
newObject = create(oldObject);创建的对象newObject只有一个属性，这个属性的值是原型对象的地址(或者引用)，如下图所示。

![img](/images/JS/selfFunction/jsObjectBaseOnPrototype.assets/__proto__.png)

当对象访问属性的时候，如果在内部找不到，那么会在原型对象中查找到属性；如果原型对象中仍然找不到属性，原型对象会查找自身的原型对象，
如此循环下去，直至找到属性或者到达顶级对象。对象查找属性的过程所经过的对象构成一条链条，称之为原型链。
**newObject,oldObject和topObject就构成一条原型链。**

 

下面列出newObject的3种的查找属性情况

newObject查找name，

1 内部找不到，到原型对象中查找

2 oldObject中查找到了name，成功返回；

newObject查找toString

1 内部找不到,到原型对象中查找

2 oldObject中查找不到toString,到原型对象中查找

3 topObject中查找到了toString，成功返回；

newObject查找valueOf

1 内部找不到,到原型对象中查找

2 oldObject中查找不到valueOf,到原型对象中查找

3 topObject中还是找不到，而且topObject是顶层对象，所以返回错误或者空值。

**对象会通过原型链动态地查找属性，对象的所拥有的属性并不是静态的。**如果原型链上的一个对象发生的改变，
那么这个改变也会马上会反应到在原型链中处于该对象下方的所有对象。


**三、继承**

如果以oldObject为原型创建了newObject，那么可以说newObject继承了oldObject。

在java中 通过语句class Cat extends Animal定义Cat类继承Animal类，Cat类产生的实例对象便拥有了Animal类中定义的属性。
类似地，在基于原型的语言中， 通过cat = create(animal)创建以animal对象为模板的cat对象，cat对象便拥有了animal对象中的属性，
因此可以说cat对象继承了anmial对象。

**四、小结**

原型的本质就是对象引用原型对象的属性，实现代码复用。

基于原型的语言是以原型对象为模板创建对象newObject = create(oldObject)。

主题二、深刻理解JavaScript基于原型的面向对象

**一、饱受争议的javascript**


javascript本质上是基于原型的语言，但是却引入了基于类的语言的new关键字和constructor模式，导致javascript饱受争议。

javascript的作者Brendan Eich 1994年研发这门语言的时候，C++语言是最流行的语言，java1.0即将发布，面向对象编程势不可挡，于是他认为，
引入new关键字可以使习惯C++/java程序员更容易接受和使用javascript。

实际上，事实证明引入new是个错误的决定。

C++/java程序员看到new一个 function的时候，他们会认为js通过function创建对象，function相当于类，
接着他们会尝试在js挖掘类似java/C++面向类的编程特性，结果他们发现function没有extends，
反而有个很奇怪的prototype对象，于是他们开始咒骂，js的面向对象太糟糕了。确实，new的引入让他们以为js的面向对象
与java/C++类似，实际上并不是，如果不是以原型本质去理解js的面向对象，
注定要遭受挫折，new，prototype，__proto__才是javascript实现原型的具体手段。

 

另一方面，理解原型的程序员，也表示不高兴，因为居然要使用new function的语法来间接实现原型继承，三行代码才做到最基本的原型继承,
下面是实现对象newObject继承对象oldObject的代码，



这太繁琐了。基于原型语言理论上应该存在一个函数create(prototypeObject)，功能是基于原型对象产生新对象，例如，

var newObject = create(oldObject);

看到这样的代码，人们就会自然很清晰地联想到，newObject是以oldObject模板构造出来的。



**js是世界上最容易被误解的语言，原因主要有两个:**



1) 作为基于原型的语言中，却连最基本的一个通过原型产生对象的函数create(prototypeObject)也没有，让人不知道js根本上是以对象创建对象。
应该添加该函数，现在Chrome和IE9的Object对象就有这个create函数。



2) 使用new func形式创建对象，让人误会js是以类似java类的构造函数创建对象，实际上，构造函数根本上在创建对象上起到次要的作用，甚至不需要，
重要的只有函数的属性prototype引用的原型对象，新对象以此为模板生成，生成之后才调用函数做初始化的操作，而初始化操作不是必要的。
当初应该废弃new 操作符，把new func分解为两步操作，

var newObject = create(func.prototype);

func.call(newObject);

这样程序员才好理解。如果想把这两个步骤合二为一，应该使用new以外的关键字。



到这里，我们务必要牢牢印入脑海的是，**js的面向对象是基于原型的面向对象，对象创建的方式根本上只有一种，就是以原型对象为模板创建对象**，
newObject = create(oldObject)。new function不是通过函数创建对象，只是刻意模仿java的表象。



js在面向对象上遭遇的争议，完全是因为商业因素导致作者失去了自己的立场。就像现在什么产品都加个云一样，
如果那时候不加个new关键字来标榜自己面向对象，产生"js其实类似c++/java"的烟幕，可能根本没有人去关注javascript。
更令人啼笑皆非的是，原本称作LiveScript的javascript，因为 后期和SUN合作，
并且为了沾上当时被SUN炒得火热的Java的光，发布的时候居然改名成Javascript。



**二、从原型本质，站在语言设计者角度，理解constructor模式**

假想我们是当时设计javascript继承机制的Brendan Eich，我们会怎么设计js的面向对象呢？

现在javascript开发到这样的阶段

1) 拥有基本类型，分支和循环，基本的数学运算,

2) 所有数据都是对象

3) 拥有类似C语言的function

4) 可以用var obj = {}语句生成一个空对象，然后使用obj.xxx或obj[xxx]设置对象属性

5) 没有继承，没有this关键字，没有new



我们任务是，实现javascript的面向对象，最好能达到类似java的创建对象和继承效果。更具体一点，我们要扩充js语言，实现类似下面的java代码。