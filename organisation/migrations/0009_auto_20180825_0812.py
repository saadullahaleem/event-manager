# Generated by Django 2.0.7 on 2018-08-25 08:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organisation', '0008_auto_20180825_0709'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organisation',
            name='email',
            field=models.EmailField(db_index=True, max_length=254, unique=True),
        ),
    ]
