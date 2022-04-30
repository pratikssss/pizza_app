fm=10;
fc=20;
fs=1000;
t=1;
n=0:1/fs:t;
mt = 0.5*sin(2*pi*fm*n + pi/2)+0.5;
st = modulate(mt,fc,fs,"ppm");
pm = modulate(mt,fc,fs,"pwm");
subplot(3,1,1);
plot(mt);
axis([0 500 0 2])
subplot(3,1,2);
plot(pm);
axis([0 500 0 2])
subplot(3,1,3);
plot(st);
axis([0 500 0 2])