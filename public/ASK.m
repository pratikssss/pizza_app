f1=25;
f2=5;
t=0:0.001:1;
x=sin(2*pi*f1*t)+1;
u=1*square(2*pi*f2*t)+1;
v=x.*u;
subplot(3,1,1);
plot(t,x);
subplot(3,1,2);
plot(t,u);
subplot(3,1,3);
plot(t,v);
